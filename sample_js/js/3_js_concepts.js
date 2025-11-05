console.log("js concepts_set2");
let x = 43;
let brand_name = "Substring Technologies";
const result = `Value of x is ${x} and brand name is ${brand_name}`;
console.log(result);
const baseUrl = "http://localhost:8080";
const completeUrl = `${baseUrl}/api/v1/users`;
const postUrl = `${baseUrl}/api/v1/posts`;
console.log(completeUrl);
console.log(postUrl);
console.log("got it");
console.log(typeof x);
console.log(typeof brand_name);
console.log("____________");
let n1 = 23;
n1 = "hi";
// Two specials
//arrays
const books = [
  "Complete References",
  "Head First Javascript",
  "Half Knowledge",
  "Think in java",
  "Django Learning PDF",
];
console.log(books);
console.log(books.length);
console.log(books[2]);
books[4] = "New txt book";
console.log(books);
// books = [];
const numbers = [1, 3, 2, 4, 3, 53];
console.log(numbers);
// -->
// if else, for , while
// const sum = numbers[0] + numbers[1] + numbers[2];
let sum = 0;

for (let item of numbers) {
  sum = sum + item;
}
console.log(sum);

numbers.push(45);
console.log(numbers);

// for (let i = 0; i <= numbers.length - 1; i++) {
//   sum = sum + numbers[i];
// }
// console.log(`sum of array is ${sum}`);

//objects
