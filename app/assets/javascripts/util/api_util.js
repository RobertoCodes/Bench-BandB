window.ApiUtil = {
  fetchBenches: function (params) {
    $.ajax ({
      url: "/api/bench",
      dataType: "json",
      data: params,
      success: function (benches) {
        ApiAction.receiveAll(benches);
      }
    });
  }
};
