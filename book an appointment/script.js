let hour = 10;
let minute = 0;
//set init time
function setTime(hour, minute) {
  if (minute < 10) {
    minute = "0" + minute;
  }
  $(".time").text(hour + ":" + minute);
}

$(function () {
  // button1 click event
  $("#button1").on("click", function () {
    $(".notice").hide();
    //update the text of button
    if ($(this).text() == "stop") {
      minute = parseInt(minute);
      minute += 20;
      if (minute >= 60) {
        minute = 0;
        hour += 1;
      }
      setTime(hour, minute);
      //exchange button1's text
      $(this).text("continue");
      //set animation pause
      $(".hourglass").css("animation-play-state", "paused");
      $(".hourglass").removeClass(".hourglass::after").addClass("paused");
      $(".top").removeClass(".top::before").addClass("paused");
      $(".bottom").removeClass(".bottom::before").addClass("paused");
    } else {
      $(".notice").hide();
      //exchange button1's text
      $(this).text("stop");
      //set animation running
      $(".hourglass").css("animation-play-state", "running");
      $(".hourglass").removeClass("paused").addClass(".hourglass::after");
      $(".top").removeClass("paused").addClass(".top::before");
      $(".bottom").removeClass("paused").addClass(".bottom::before");
    }
  });

  // button1click event
  $("#button2").on("click", function () {
    //update the text of button
    $(".notice").show();
    $("#button1").text("continue");
    $(".hourglass").css("animation-play-state", "paused");
    $(".hourglass").removeClass(".hourglass::after").addClass("paused");
    $(".top").removeClass(".top::before").addClass("paused");
    $(".bottom").removeClass(".bottom::before").addClass("paused");
    $(".notice").text("Your appointment is successfully booked!");
  });
});

