
  var minSeats;
  var maxSeats;
var Filter = React.createClass({

  updateMinSeatsFilter: function (event) {
    minSeats = event.currentTarget.value;
    FilterAction.updateMinSeats(minSeats);
  },

  updateMaxSeatsFilter: function (event) {
    maxSeats = event.currentTarget.value;
    FilterAction.updateMaxSeats(maxSeats);
  },

  render: function () {
    return(
      <div>
      <label> Min # Seats </label>
      <input type="number"
        value={minSeats}
        onChange={this.updateMinSeatsFilter}
      />
      <label> Max # Seats </label>
      <input type="number"
        value={maxSeats}
        onChange={this.updateMaxSeatsFilter}
      />
      </div>
    );
  }

});
