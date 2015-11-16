(function (root) {
  var _filterParams = {bounds: "", minSeats: "", maxSeats: ""};
  var resetfilterParams = function(filterParams) {
    _filterParams = filterParams;
  };


  var CHANGE_EVENT = "change";

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
      if(payload.actionType === FilterConstants.PARAMS_RECEIVED){
        resetfilterParams(payload.params);
        FilterStore.emit(CHANGE_EVENT);
      }
    })




  });


})(this);
