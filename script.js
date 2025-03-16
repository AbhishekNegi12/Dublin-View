function checkFare() {
  let age = document.getElementById("age").value;
  let output = document.getElementById("fareOutput");
  if (age <= 19) {
    output.innerText = "You can pay child's fare";
  }
  else {
    output.innerText = "You must pay the adult fare";
  }
}
function displayFoodChoice() {
  let name = document.getElementById("userName").value;
  let cuisine = document.getElementById("foodType").value;
  let output = document.getElementById("foodOutput");
  output.value = `Hello ${name}, you have chosen ${cuisine} cuisine.`;
}
