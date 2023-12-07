// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var saveButton = $(".saveBtn");
var now = dayjs().format("MM/DD/YYYY");
var pEl = $("#currentDay").text(now);
var times =
  $[
    ("#hour9",
    "#hour10",
    "#hour11",
    "#hour12",
    "#hour1",
    "#hour2",
    "#hour3",
    "#hour4",
    "#hour5",
    "#hour6",
    "#hour7")
  ];
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currTime = parseInt(dayjs().format("H"));
  $(".time-block").each(function (index) {
    var blockTime = index + 9;
    if (currTime === blockTime) {
      $(this).addClass("present");
    } else if (currTime < blockTime) {
      $(this).addClass("future");
    } else if (currTime > blockTime) {
      $(this).addClass("past");
    }
  });
  saveButton.on("click", function (event) {
    var userInput = $(this).siblings(".description").val();
    var times = event.target;
    localStorage.setItem("times", userInput);
    localStorage.getItem(times);
  });
  // localStorage.getItem("input", userKey);
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
