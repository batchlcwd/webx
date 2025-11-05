console.log("code in advance.js file");

function rajiv(a, b, c, d, print_data) {
  console.log("this is rajiv function");
  console.log(a + b + c + d);
  print_data("Rajiv");
}

rajiv(1, 2, 3, 4, (value) => {
  console.log("this is arrow functions for first time call");
  console.log(value);
});

rajiv(2, 3, 4, 3, (value) => {
  console.log("this is arrow for second time.");
  console.log(value);
});
