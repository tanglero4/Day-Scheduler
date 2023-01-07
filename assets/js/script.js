// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // A listener for click events on the save button.
  var today = dayjs();
  $("#currentDay").text(today.format("MMM D, YYYY"));

  function compareTime() {
    var currentTime = dayjs().hour();
    //console.log(currentTime);

    $(".time-block").each(function (index, timeDiv) {
      //console.log(index, timeDiv);
      var id = timeDiv.id;
      //console.log(id);

      var blockTime = parseInt(id.split("-")[1]);
      //console.log(blockTime);
      //== value
      //=== value, data type

      if (currentTime === blockTime) {
        $(this).addClass("present");
      } else if (currentTime > blockTime) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
    });
  }

  $(".saveBtn").on("click", function (event) {
    console.log(this);

    //get user input from textarea
    const userValue = document.getElementById("user-input").value;

    //sets up local storage or make an array to put the user input
    let toDo = JSON.parse(localStorage.getItem("To do")) || [];

    // save the users input to local storage
    toDo.push(userValue);
    localStorage.setItem("To Do", JSON.stringify(toDo));
  });

  compareTime();

  // To Do: event delegation to check the hour and put the correct color, make curent time schedule same as current date,
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
