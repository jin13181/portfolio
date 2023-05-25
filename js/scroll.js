function vh(v) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 0 && $(this).scrollTop() <= vh(50)) {
      $(".about").css("background", "#cdc4b5").css("transition", "0.5s");
      $(".about p, .about h2, .about h3, .about h4, .about h2::before")
        .css("color", "#203929")
        .css("transition", "0.5s");
      $(".section-title h2:before")
        .css("backgroundColor", "#203929")
        .css("transition", "0.5s");
    } else if (
      $(this).scrollTop() >= vh(50) &&
      $(this).scrollTop() <= vh(300)
    ) {
      $(".about").css("background", "#203929").css("transition", "0.5s");
      $("p, h2, h3, h4, h2::before")
        .css("color", "#203929")
        .css("transition", "0.5s");
    } else if (
      $(this).scrollTop() >= vh(300) &&
      $(this).scrollTop() <= vh(350)
    ) {
      $(".section").css("background", "#203929").css("transition", "0.5s");
    } else if ($(this).scrollTop() >= 1400 && $(this).scrollTop() <= 1900) {
      $(".section").css("background", "#203929").css("transition", "0.5s");
    } else if ($(this).scrollTop() >= 2000 && $(this).scrollTop() <= 2500) {
      $(".section").css("background", "#cdc4b5").css("transition", "0.5s");
    }
  });
});
