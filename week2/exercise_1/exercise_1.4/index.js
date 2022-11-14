console.log(4)
var btnCalculateAge = document.getElementById("btnCalculateAge")

btnCalculateAge.addEventListener('click', function (event) {
  //returnToPreviousPage();
  event.preventDefault()
  var objToday = new Date();
  var curYear = objToday.getFullYear()

  var date = document.getElementById("date");

  console.log("Your age is: ", curYear - date.value.split("-")[0])
});

