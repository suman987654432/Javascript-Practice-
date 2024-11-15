$("#hide").ready(function () {
  $("button").dblclick(function () {
    $("p").hide();
  });

  
  $("#show").dblclick(function () {
    $("p").show();
  });
});
