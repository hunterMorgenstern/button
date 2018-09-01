const button = document.getElementById("the-button");

button.addEventListener("click", () => {
  console.log("hello");
});

function sum(a, b) {
  return a + b;
}
module.exports = sum;
