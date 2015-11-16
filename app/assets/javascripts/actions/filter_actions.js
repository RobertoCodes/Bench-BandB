window.FilterAction = {

  updateBoundsParams: function (bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS_PARAMS,
      bounds: bounds
    });
  },

  updateMinSeats: function (min) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MIN_SEATS,
      min: min
    });
  },

  updateMaxSeats: function (max) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MAX_SEATS,
      max: max
    });
  }

};
