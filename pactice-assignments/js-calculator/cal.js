function calculate() {
  let res = "";
  var val1 = document.getElementById("num1").value;
  var val2 = document.getElementById("num2").value;
  var operator = document.getElementById("opr").value;
  var result = document.getElementById("result");
  if (operator == "") {
    alert("please choose a operator");
  } else if (operator == "+") {
    res = parseFloat(val1) + parseFloat(val2);
  } else if (operator == "-") {
    res = parseFloat(val1) - parseFloat(val2);
  } else if (operator == "/") {
    res = parseFloat(val1) / parseFloat(val2);
  } else if (operator == "*") {
    res = parseFloat(val1) * parseFloat(val2);
  } else if (operator == "%") {
    res = parseFloat(val1) % parseFloat(val2);
  }
  result.textContent = `Result = ${res}`;
}
