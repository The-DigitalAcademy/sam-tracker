var names  = "";
var option = "";


function findName()
  const names = document.getElementById("txt").value;
  const option = document.getElementById("option");
  let displayList = document.getElementById("displayList");

  displayList.innerHTML += "<p>" + option + " , " + names + "</p>";
