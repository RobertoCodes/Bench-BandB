window.ApiUtil = {
  fetchBenches: function () {
    params = FilterStore.all();
    $.ajax ({
      url: "/api/bench",
      dataType: "json",
      data: params,
      success: function (benches) {
        ApiAction.receiveAll(benches);
      }
    });
  },

  createBench: function (bench, callback) {
    $.ajax ({
      url: "/api/bench",
      method: "POST",
      dataType: "json",
      data: {bench: bench},
      success: function (bench) {
        ApiAction.receiveABench(bench);
        callback && callback();
      }
    });
  }
};
