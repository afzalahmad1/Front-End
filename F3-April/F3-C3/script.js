let form = document.getElementById("form");
let btn = document.getElementById("btn");


function generateToken(length) {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var token = '';
  for (var i = 0; i < length; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

var token = generateToken(16);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let pass1 = document.getElementById("pass1").value;
  let pass2 = document.getElementById("pass2").value;
  let errorMessage = document.getElementById("message");

  //validation part
  if (fullName == "" || email == "" || pass1 == "" || pass2 == "") {
    errorMessage.style.color = "red";
    errorMessage.innerText = "Error: All the fields are mandatory";
    return;
  } else if (pass1 !== pass2) {
    errorMessage.style.color = "red";
    errorMessage.innerText = "Error: Password must be same";
    return;
  } else {
    errorMessage.style.color = "green";
    errorMessage.innerText = "Successfully Signed Up";
  }

  let data = {
    fullName: fullName,
    Email: email,
    Password: pass1,
    Token: token
  };
  localStorage.setItem("data", JSON.stringify(data));
  window.location.href="./profile.html";
  //showProfile();
  console.log(data);
});



function profilePage(){
  if (localStorage.getItem("data") !== null) {
    window.location.href = "./profile.html"
    }else{
      alert("Please signup first")
      return
    }
  }
  function signupPage(){
    if (localStorage.getItem("data") !== null) {
      window.location.href = "./profile.html"
      }else{
        window.location.href = "./index.html"
      }
  }

  (() => {
    // whenever page loads this function is called
    // fetching the data from localstorage
    //data = JSON.parse(localStorage.getItem("data")) || [];
    // show the tasks
   // showStudents()
   if (localStorage.getItem("data") !== null) {
    window.location.href = "./profile.html"
    }
  })();

/*
function myProfile(){
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let errorMessage = document.getElementById("message");
  
    //validation part
    if (fullName == "" || email == "" || pass1 == "" || pass2 == "") {
      errorMessage.style.color = "red";
      errorMessage.innerText = "Error: All the fields are mandatory";
      return;
    } else if (pass1 !== pass2) {
      errorMessage.style.color = "red";
      errorMessage.innerText = "Error: Password must be same";
      return;
    } else {
      errorMessage.style.color = "green";
      errorMessage.innerText = "Successfully Signed Up";
    }
    let data = {
      fullName: fullName,
      Email: email,
      Password: pass1,
    };
    localStorage.setItem("data", JSON.stringify(data));
   // window.location.href = "./profile.html";
    showProfile();
    console.log(data);
}
*/


/*
(() => {
  // whenever page loads this function is called
  // fetching the data from localstorage
  data = JSON.parse(localStorage.getItem("data")) || [];
  // show the tasks
 // showStudents()
})();
*/