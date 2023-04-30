var table = document.getElementById("myTable");
function createTable() {
    //Write your code here
	let rn = parseInt(prompt("Input number of rows"))
	let cn = parseInt(prompt("Input number of columns"))
	for (let i = 0; i < rn; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell(j);
      cell.innerText = `Row-${i} Column-${j}`;
    }
  }
}
