
var _markers = [];

var markEquals = function (mark,otherMark) {
  if (mark.position.lat() === otherMark.position.lat() &&
        mark.position.lng() === otherMark.position.lng()) {
          return true;
        }
  return false;
};

window.Map = React.createClass({

  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 40.7141, lng: -74.0063},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    BenchStore.addChangeListener(this._changed);
    google.maps.event.addListener(this.map, 'idle', function () {
      var latLng = this.map.getBounds();
      var northEast = latLng.getNorthEast();
      var southWest = latLng.getSouthWest();
      params = {bounds: {northEast : {lat : northEast.lat(), lng : northEast.lng()}, southWest : {lat : + southWest.lat(), lng: southWest.lng()}}};
      ApiUtil.fetchBenches(params);
    }.bind(this));
  },

  _changed: function () {
    var mapObj = this.map;
    newMarks = [];
    BenchStore.all().map(function (bench) {
      var marker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng}
      });
      var included = false;
      _markers.forEach(function (otherMark) {
        if (markEquals(marker,otherMark)) {
          included = true;
        }
      });
      if (included === false) {
        marker.setMap(mapObj);
      }
      newMarks.push(marker);
    });
    var stillThere = false;
    _markers.forEach(function (oldMark){
      newMarks.forEach(function (newMark) {
          if (markEquals(oldMark, newMark)) {
            stillThere = true;
          }
      });
      if (stillThere === false) {
        oldMark.setMap(null);
      }
    });
      _markers = newMarks;
  },






  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  }


});
