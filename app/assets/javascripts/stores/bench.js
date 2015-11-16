(function (root) {
  var _benches = [];
  var resetBenches = function(benches) {
    _benches = benches;
  };

  var addABench = function (bench) {
      _benches.push(bench);
    };

  var CHANGE_EVENT = "change";

  root.BenchStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },


    all: function () {
      return _benches.slice();
    },

    dispatcherId: AppDispatcher.register(function(payload){
      if(payload.actionType === BenchConstants.BENCHES_RECEIVED){
        resetBenches(payload.benches);
        BenchStore.emit(CHANGE_EVENT);
      }
      if(payload.actionType === BenchConstants.BENCH_RECEIVED){
        addABench(payload.bench);
        BenchStore.emit(CHANGE_EVENT);
      }
    })




  });


})(this);
