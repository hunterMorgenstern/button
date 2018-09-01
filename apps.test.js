const sum = require("./public/apps").default;

test("adds 1 + 2 to equal 3", () => {
  document.body.innerHTML = "<div>" + '<button id="the-button" />' + "</div>";

  console.log("should have text added", document.body.innerHTML);

  expect(sum(1, 2)).toBe(3);
});
