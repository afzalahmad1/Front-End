let form = document.getElementById("form");
let empList = document.getElementById("emp-container");
let text = document.getElementById("text");
let employees = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function addEmployee() {
  let message = document.getElementById("message");
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;
  if (name === "" || profession === "" || age === "") {
    message.innerText =
      "Error: Please Makke sure All the fields are filled before adding";
    message.style.visibility = "visible";
    message.style.color = "red";
    return;
  } else {
    message.innerText = "Success: Employee Added";
    message.style.visibility = "visible";
    message.style.color = "green";
    saveData(name, profession, age);
  }
}

function saveData(name, profession, age) {
  let emp = {
    id: 0,
    Name: name,
    Profession: profession,
    Age: age,
  };
  employees.push(emp);
  localStorage.setItem("employees", JSON.stringify(employees));
  showEmployees();

  //for you have 0 employees
  hideShowText();
}

function showEmployees() {
  empList.innerHTML = "";
  employees.map((employee, idx) => {

    empList.innerHTML += `
        <div class="emp-detail" id="row-${idx}">
          <div class="li">
            <div >${(employee.id = idx + 1)}</div>
            <div>${employee.Name}</div>
            <div>${employee.Profession}</div>
            <div>${employee.Age}</div>
          </div>
          <div><button class="btn1" onclick="deleteEmployee(${
            employee.id - 1
          })">Delete User</button></div>
        `;
  });
  form.reset()
} 

function deleteEmployee(id) {
  let data = document.getElementById(`row-${id}`);
  //delete from ui
  data.remove();
  //delete from array
  employees.splice(id, 1);
  // update localstorage
  localStorage.setItem("employees", JSON.stringify(employees));
  console.log(employees);
  hideShowText();
}

function hideShowText() {
  if (employees.length === 0) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

(() => {
    // whenever page loads this function is called
    // fetching the data from localstorage
    employees = JSON.parse(localStorage.getItem("employees")) || [];
    console.log(employees);

    // show the tasks
    showEmployees()
})();
