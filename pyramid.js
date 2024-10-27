function pyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += (2 * (i - 1) + j) + " ";
      }
      console.log(row);
    }
  }
  
  const rows = parseInt(prompt("Enter number of rows: "));
  pyramid(rows);