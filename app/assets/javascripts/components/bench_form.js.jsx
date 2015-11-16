window.BenchForm = React.createClass ({

  blankAttrs: {
    lat: "",
    lng: "",
    description: "",
    seating: "",
  },

  getInitialState: function () {
    return this.blankAttrs;
  },


  componentDidMount: function () {
    this.prepopulate();
  },

  prepopulate: function () {
    this.setState({lat: this.props.location.query.lat});
    this.setState({lng: this.props.location.query.lng});
  },

  updateLat: function (event) {
    this.setState({lat : event.currentTarget.value});
  },

  updateLng: function (event) {
    this.setState({lng : event.currentTarget.value});
  },

  updateDescription: function (event) {
    this.setState({description : event.currentTarget.value});
  },

  updateSeating: function (event) {
    this.setState({seating : event.currentTarget.value});
  },


  createBench: function (e) {
    e.preventDefault();
    var bench = {};
    Object.keys(this.state).forEach(function (key) {
      bench[key] = this.state[key];
    }.bind(this));
    ApiUtil.createBench(bench, function () {
      this.props.history.pushState(null, "/", {});
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      <form onSubmit={this.createBench}>
        <div>
          <label htmlFor='bench_lat'>Latitude: </label>
          <input
            type="number"
            step="any"
            value={this.state.lat}
            onChange={this.updateLat}
          />
        </div>
        <div>
          <label htmlFor='bench_lng'>Longitude: </label>
          <input
            type="number"
            step="any"
            value={this.state.lng}
            onChange={this.updateLng}
          />
        </div>
        <div>
          <label htmlFor='bench_seating'>Seats: </label>
          <input
            type="number"
            value={this.state.seating}
            onChange={this.updateSeating}
          />
        </div>
        <div>
          <label htmlFor='bench_description'>Description: </label>
          <input
            type="text"
            value={this.state.description}
            onChange={this.updateDescription}
          />
        </div>
        <button>Create Bench</button>
      </form>

    );
  }


});
