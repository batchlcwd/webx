// console.log("This is my script file");
// console.log("this is amazing thing to run js without browser");
// let brand_name = "Substring Tech";
// console.log(brand_name);
// // window.alert("hi this is alert");
// // window.prompt("hi");

/*
Functions : resusable code:


*/

function greetUser() {
  console.log("hi");
  console.log("hello");
}

function printTable(number = 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

function get_full_name(first_name, last_name) {
  return `${first_name} ${last_name}`;
}

// arrow functions
// const arr = () => console.log("this is arrow function");
// arr();

const sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 10));

// console.log("hi");
// console.log("hello");
// //1K

// console.log("hi");
// console.log("hello");

// console.log("hi");
// console.log("hello");
// greetUser();
// greetUser();
// greetUser();
// printTable(5);
// printTable(43);

// const result = get_full_name("john", "doe");
// console.log(result);

// printTable();
// printTable(11);
