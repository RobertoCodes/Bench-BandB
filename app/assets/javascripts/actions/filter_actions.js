window.FilterAction = {

  receiveAll: function (params) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.PARAMS_RECEIVED,
      params: params
    });
  },


};
