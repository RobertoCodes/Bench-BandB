// (function (root) {
//   var _mark = [];
//   var resetBenches = function(benches) {
//     _benches = benches;
//   };
//
//   var CHANGE_EVENT = "change";
//
//   root.MarkerStore = $.extend({}, EventEmitter.prototype, {
//
//     addChangeListener: function (callback) {
//       this.on(CHANGE_EVENT, callback);
//     },
//
//     removeChangeListener: function (callback) {
//       this.removeListener(CHANGE_EVENT, callback);
//     },
//
//     getAMark: function () {
//       return mark.slice();
//     },
//
//     dispatcherId: AppDispatcher.register(function(payload){
//       if(payload.actionType === MarkConstants.BENCHES_RECEIVED){
//         resetBenches(payload.benches);
//         BenchStore.emit(CHANGE_EVENT);
//       }
//     })
//
//
//
//
//   });
//
//
// })(this);
