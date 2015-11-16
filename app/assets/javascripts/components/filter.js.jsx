var Filter = React.createClass({

  getInitialState: function () {
    return ({minSeats: "", maxSeats: ""});
  },


  updateSeatsFilter: function () {
    FilterAction.getFilteredResults(this.state.minSeats, this.state.maxSeats);
  },

  render: function () {
    return(
      <div>
      <label> Min # Seats </label>
      <input type="number"
        value={this.state.minSeats}
        onChange={this.updateSeatsFilter}
      />
      <label> Max # Seats </label>
      <input type="number"
        value={this.state.maxSeats}
        onChange={this.updateSeatsFilter}
      />
      </div>
    );
  }

});
