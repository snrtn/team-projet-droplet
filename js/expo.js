function chat() {
  $.ajax({
    type: "GET",
    url: "https://api.thecatapi.com/v1/images/search",
    data: {},
    success: function (response) {
      let imgurl = response[0]['url'];
      $("#img").attr("src", imgurl);
    }
  })
}