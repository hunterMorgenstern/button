const button = document.getElementById("the-button");

button.addEventListener("click", () => {
  const message = "this will be whatever i want";
  const textBox = document.getElementById("text-box");
  const text = document.createTextNode(message);
  textBox.appendChild(text);
});

function sum(a, b) {
  return a + b;
}
module.exports = sum;
