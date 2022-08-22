$(document).ready(function () {
  let btn = $("button");
  btn.click(function () {
    $("#animation").animate(
      { marginLeft: "100px", width: "100px", height: "100px" },
      3000
    );
    $("#animation").animate({ backgroundColor: "blue" }, 5000, function () {
    $(this).append("<h2>Animacja zakoczona</h2>");
  });
});
});
// function(){
//     $(this).append('<h2>Animacja zakoczona</h2>' )});
