window.Search = React.createClass({

  getInitialState: function () {
    return ({minSeats: "", maxSeats: ""});
  },

  clickMapHandler: function (lat,lng) {
    var coords = {lat: lat, lng: lng};
    this.props.history.pushState(null, "/benches/new", coords);
  },

  componentDidMount: function () {
    FilterStore.addChangeListener(this._changed);
  },

  render: function () {
    return (<div>
      <Map handler={this.clickMapHandler}/>
      <Filter/>
      <Index/>
      </div>);
  }



});
