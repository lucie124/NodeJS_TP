$.ajax({
  url: "https://MessageBoard.lucie124.repl.co/msg/getAll",
  dataType: "json",
  type: "GET",
  success: function processSuccess(data) {
    console.log(data)
    for (var i=0; i<data.length; i++){
        $("ul").append($("<li>").text(data[i]));
    }
    $("button").click(function () {
        var message = $("textarea").val();
        data.push(message);
        $.getJSON("https://MessageBoard.lucie124.repl.co/msg/post/"+message);
        console.log(data)
        $("ul").append($("<li>").text($("textarea").val()));
        return false;   // pour annuler le comportement par défaut

    })
  }
});
