# TeksTable

Generate bordered table with data, suitable for printing to console.


## Quickstart

### Example with default values

```
const tekstable = require('tekstable');
const tableData = [
    ["No.", "Name", "Address", "Age"],
    ["1", "Alice", "Michigan", "22"],
    ["2", "Bob", "Bengaluru", "23"]
]

console.log(tekstable(tableData));
```
Output:
```
+-------+---------+-------------+-------+
|  No.  |  Name   |  Address    |  Age  |
+-------+---------+-------------+-------+
|  1    |  Alice  |  Michigan   |  22   |
|  2    |  Bob    |  Bengaluru  |  23   |
+-------+---------+-------------+-------+
```

### Example with custom options

```
const tekstable = require('tekstable');
const tableData = [
    ["No.", "Name", "Address", "Age"],
    ["1", "Alice", "Michigan", "22"],
    ["2", "Bob", "Bengaluru", "23"]
]

console.log(tekstable(tableData, { spacing: 3, isHeader: true}));
```
Output:
```
+---------+-----------+---------------+---------+
|   No.   |   Name    |   Address     |   Age   |
+---------+-----------+---------------+---------+
|   1     |   Alice   |   Michigan    |   22    |
|   2     |   Bob     |   Bengaluru   |   23    |
+---------+-----------+---------------+---------+
```

### Example without header

```
const tekstable = require('tekstable');
const tableData = [
    ["1", "Alice", "Michigan", "22"],
    ["2", "Bob", "Bengaluru", "23"]
];

console.log(tekstable(tableData, { spacing: 1, isHeader: false}));
```
Output:
```
+---+-------+-----------+----+
| 1 | Alice | Michigan  | 22 |
| 2 | Bob   | Bengaluru | 23 |
+---+-------+-----------+----+
```