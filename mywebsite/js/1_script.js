console.log("1_script loaded");

//login button click
function loginButtonClick() {
  console.log("login button clicked..");
}

//kuch aisa code likhna hai.. ki jaise hi button click ho pata chal jaye
//css selectors
//id
const loginButton = document.getElementById("login_button");
console.log(loginButton);

if (loginButton) {
  //bahut important role hai.
  loginButton.addEventListener("dblclick", loginButtonClick);
}

const inputNameFieldObj = document.getElementById("name");
console.log(inputNameFieldObj);
if (inputNameFieldObj) {
  inputNameFieldObj.addEventListener("keyup", (event) => {
    const value = event.target.value;
    console.log("typed ", value);
  });
}
