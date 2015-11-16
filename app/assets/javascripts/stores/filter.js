(function (root) {
  var _filterParams = {bounds: "", minSeats: "", maxSeats: ""};
  var resetfilterParams = function(filterParams) {
    _filterParams = filterParams;
  };


  var CHANGE_EVENT = "change";

  var resetBoundsParams = function (bounds) {
      _filterParams.bounds = bounds;
  };

  var resetMinSeats = function (min) {
    _filterParams.minSeats = min;
  };

  var resetMaxSeats = function (max) {
    _filterParams.maxSeats = max;
  };


  root.FilterStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },


    all: function () {
      return _filterParams;
    },


    dispatcherId: AppDispatcher.register(function(payload){
      if (payload.actionType === FilterConstants.UPDATE_BOUNDS_PARAMS){
        resetBoundsParams(payload.bounds);
        FilterStore.emit(CHANGE_EVENT);
      }
      if (payload.actionType === FilterConstants.UPDATE_MIN_SEATS){
        resetMinSeats(payload.min);
        FilterStore.emit(CHANGE_EVENT);
      }
      if (payload.actionType === FilterConstants.UPDATE_MAX_SEATS){
        resetMaxSeats(payload.max);
        FilterStore.emit(CHANGE_EVENT);
      }
    })




  });


})(this);
