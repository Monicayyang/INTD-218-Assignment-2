let timeinterval;
//var endtime;
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  return {
    total,
    minutes,
    seconds,
  };
}
function updateClock() {
  const t = getTimeRemaining(endtime);
  $(".minutes").text(("0" + t.minutes).slice(-2));
  $(".seconds").text(("0" + t.seconds).slice(-2));
  if (t.total <= 0) {
    clearInterval(timeinterval);
  }
}
function initializeClock(endtime) {
  function updateClock() {
    const t = getTimeRemaining(endtime);
    $(".minutes").text(("0" + t.minutes).slice(-2));
    $(".seconds").text(("0" + t.seconds).slice(-2));
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  timeinterval = setInterval(updateClock, 1000);
}
//const deadline  ;
initializeClock(new Date(Date.parse(new Date()) + 15 * 60 * 1000));
$(function () {
  // button1 click event
  $("#button1").on("click", function () {
    //clear interval
    clearInterval(timeinterval);
    //reset colck to init clock
    initializeClock(new Date(Date.parse(new Date()) + 15 * 60 * 1000));
    //set animation running
    $(".hourglass").css("animation-play-state", "running");
    $(".hourglass").removeClass("paused").addClass(".hourglass::after");
    $(".top").removeClass("paused").addClass(".top::before");
    $(".bottom").removeClass("paused").addClass(".bottom::before");
    //hide notice
    $(".notice").hide();
    $("#button2").show();
    $("#button2").text("stop");
  });

  // button2 click event
  $("#button2").on("click", function () {
    $(".notice").hide();
    clearInterval(timeinterval);
    $("#button1").show();
    //update the text of button
    if ($(this).text() == "stop") {
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
      //continue clock
      continueClock();
      //set animation running
      $(".hourglass").css("animation-play-state", "running");
      $(".hourglass").removeClass("paused").addClass(".hourglass::after");
      $(".top").removeClass("paused").addClass(".top::before");
      $(".bottom").removeClass("paused").addClass(".bottom::before");
    }
  });
  //button3 click event
  $("#button3").on("click", function () {
    //stop clock
    clearInterval(timeinterval);
    $(".hourglass").css("animation-play-state", "paused");
    $(".hourglass").removeClass(".hourglass::after").addClass("paused");
    $(".top").removeClass(".top::before").addClass("paused");
    $(".bottom").removeClass(".bottom::before").addClass("paused");
    $(".notice").show();
    $(".notice").text("Your payment is succeeded!");
    //disable button2
    $("#button2").hide();
  });
});
// continue clock
function continueClock() {
  const min = parseInt($(".minutes").text());
  const sec = parseInt($(".seconds").text());
  const newdeadline = new Date(
    Date.parse(new Date()) + (min * 60 + sec) * 1000
  );
  initializeClock(newdeadline);
}
