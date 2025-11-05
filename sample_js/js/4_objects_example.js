console.log("Objects Example");

const student1 = {
  name: "Sayantan",
  phone: 24323,
  gender: "male",
  college: "IITKanpur",
  address: "Delhi",
};
// console.log(student1);
// console.log(typeof student1);
// console.log(student1.name);
// console.log(student1["name"]);
// student1.address = "Delhi India";
// console.log(student1);
const student2 = {
  name: "Rajiv",
  phone: 243223452,
  gender: "male",
  college: "IITDelhi",
  address: "Delhi",
};
// console.log(student1.name);
// console.log(student2.name);

const students = [
  student1,
  student2,
  {
    name: "Nikhil",
    phone: 243223452,
    gender: "male",
    college: "IITDelhi",
    address: "Delhi",
  },
  {
    name: "Komal",
    phone: 243223452,
    gender: "female",
    college: "IITDelhi",
    address: {
      street: "2345/235235 Near Indrapuram",
      city: "Lucknow",
      pinCode: 226045,
      country: "India",
    },
    movies: [
      {
        name: "IronMan1",
        watch: "01/01/2026",
        rate: "4/5",
      },
      {
        name: "IronMan2",
        watch: "01/01/2027",
        rate: "5/5",
      },
    ],
  },
  {
    name: "Asit",
    phone: 243223452,
    gender: "male",
    college: "IITDelhi",
    address: "Delhi",
    movies: ["GOT", "Avatar", "ABC"],
  },
  {
    name: "Krishna",
    phone: 243223452,
    gender: "male",
    college: "IITDelhi",
    address: "Delhi",
  },
  {
    name: "Madhu",
    phone: 243223452,
    gender: "female",
    college: "IITDelhi",
    address: "Delhi",
  },
  {
    name: "Prisha",
    phone: 243223452,
    gender: "male",
    college: "IITDelhi",
    address: "Delhi",
  },
];
console.log(students);

for (let student of students) {
  console.log(student.name);
  console.log(student.gender);
  console.log("----");
}

// komal g ka pinCode kya hai.
const komalGPinCode = students[3].address.pinCode;
console.log(`PinCode of Komal G is ${komalGPinCode}`);
// komal g ki 1st favorite movie ye kab dekhengi
const komalGWatchMovie = students[3].movies[0].watch;
console.log(`Komal g will watch her movie ${komalGWatchMovie}`);
// komal g ki 2nd favorite movie ki rating kitni hogi
console.log(students[3].movies[1].rate);

// --------- continue this
//------- new features mostly used
//---- asyn js
//--- form validations
//-- DOM manipulations
