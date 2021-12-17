// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


//Utilize moment to set currentday
var today = moment().format("MMM Do, YYYY");
$("#currentDay").text(today);

//Moment to set time by hour
var now = moment().hour();
console.log(now);

var textArea = $("textarea");
console.log(textArea);

//For statement to sync timeblocks by hour
for (var i=0; i < textArea.length; i++) {
    console.log(textArea[i]);
    console.log($(textArea[i]).attr("id"));
    var timeBlockHour = $(textArea[i]).attr("id");
    if (timeBlockHour === now) {
        $(textArea[i]).addClass("present");
    } else if (timeBlockHour < now) {
        $(textArea[i]).addClass("past");
    } else {
        $(textArea[i]).addClass("future");
    }
}


//Add event listener to store value in textarea to local storage
$('.saveBtn').click(function() {
    var text = $(this).siblings("textarea").val()
    console.log(text)
    var time = $(this).siblings("").attr("id")
    localStorage.setItem("text", "time", JSON.stringify(text, time));
})

//Get item//
$("#9").val(localStorage.getItem(9))
$("#10").val(localStorage.getItem(10))
$("#11").val(localStorage.getItem(11))
$("#12").val(localStorage.getItem(12))
$("#13").val(localStorage.getItem(13))
$("#14").val(localStorage.getItem(14))
$("#15").val(localStorage.getItem(15))
$("#16").val(localStorage.getItem(16))
$("#17").val(localStorage.getItem(17))
