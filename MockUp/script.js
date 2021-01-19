$.ajax({
  url: "https://MessageBoard.lucie124.repl.co/msg/getAll",
  dataType: "json",
  type: "GET",
  success: function processSuccess(data) {
    console.log(data)
    for (var i=0; i<data.length; i++){
        $("ul").append($("<li>").text(data[i]));
    }
  }
});