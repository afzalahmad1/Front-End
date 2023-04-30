let profile = document.getElementById("profile");
let data1 = JSON.parse(localStorage.getItem("data"));
(() => {
    // whenever page loads this function is called
    // fetching the data from localstorage
    //data = JSON.parse(localStorage.getItem("data")) || [];
    // show the tasks
   // showStudents()
   if (localStorage.getItem("data") === null) {
    window.location.href = "./index.html"
    }
  })();
/*/
let heading = document.createElement("h1");
heading.innerText = data1.fullName;
profile.appendChild(heading )
*/
profile.innerHTML = `<h1>Profile</h1>
            <h1>Full Name:  ${data1.fullName}</h1>
            <h1>Email:  ${data1.Email}</h1>
            <h1>Password: ${data1.Password}</h1>
            `;

let logout = document.getElementById("logout");
logout.addEventListener('click',()=>{
    localStorage.clear();
    window.location.href="./index.html";
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
        alert("Account already created")
        window.location.href = "./profile.html"
        }else{
          window.location.href = "./index.html"
        }
    }