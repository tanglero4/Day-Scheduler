$(function () {
  // Display the current date in the header of the page
  var today = dayjs();
  $("#currentDay").text(today.format("MMM D, YYYY"));

  function compareTime() {
    var currentTime = dayjs().hour();

    // A listener for click events on the save button.
    $(".time-block").each(function (index, timeDiv) {
      //console.log(index, timeDiv);
      var id = timeDiv.id;
      //console.log(id);

      var blockTime = parseInt(id.split("-")[1]);
      //console.log(blockTime);

      // Apply the past, present, or future class to each time
      // block by comparing the block time to the current hour and atatch correct background color
      if (currentTime === blockTime) {
        $(this).addClass("present");
      } else if (currentTime > blockTime) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
    });
  }
  //sets up local storage or make an array to put the user input
  //   let toDo = JSON.parse(localStorage.getItem("To do")) || [];

  //   // save the users input to local storage
  //   toDo.push(userValue);
  //   localStorage.setItem("To Do", JSON.stringify(toDo));
  // });

  compareTime();

  //Save button function
  $(".saveBtn").on("click", function (event) {
    var elId = $(this).parent()[0].id;

    // get user input and store in the const value
    const userValue = $(this).prev()[0].value.trim();

    // store user input to local storage
    localStorage.setItem(elId, userValue);
  });

  // This function saves user input to time slots even after browser is refreshed
  $(".description").each(function () {
    var divEl = $(this).parent()[0].id;

    // gets user input from local storage
    var valText = localStorage.getItem(divEl);

    // removes quatation mark
    $(this)[0].value = valText;
  });
});
