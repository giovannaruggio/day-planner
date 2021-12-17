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

//Function to save value in textarea to localstorage upon clicking save button

let saveButton = $(".btn");
saveButton.on("click", function save() {
  let textValue9 = document.getElementById("9").value;
  localStorage.setItem("9todo", textValue9);

  let textValue10 = document.getElementById("10").value;
  localStorage.setItem("10todo", textValue10);

  let textValue11 = document.getElementById("11").value;
  localStorage.setItem("11todo", textValue11);

  let textValue12 = document.getElementById("12").value;
  localStorage.setItem("12todo", textValue12);

  let textValue13 = document.getElementById("13").value;
  localStorage.setItem("13todo", textValue13);

  let textValue14 = document.getElementById("14").value;
  localStorage.setItem("14todo", textValue14);

  let textValue15 = document.getElementById("15").value;
  localStorage.setItem("15todo", textValue15);

  var textValue16 = document.getElementById("16").value;
  localStorage.setItem("16todo", textValue16);

  var textValue17 = document.getElementById("17").value;
  localStorage.setItem("17todo", textValue17);
  
});