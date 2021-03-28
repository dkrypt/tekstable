const tekstable = require('./main');

const tableData = [
    ["1", "Alice", "Michigan", "22"],
    ["2", "Bob", "Bengaluru", "23"]
]

console.log(tekstable(tableData, { spacing: 1, isHeader: false }));
