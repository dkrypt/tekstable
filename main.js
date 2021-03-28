module.exports = (table, opts) => {
    if(!opts) opts = {};
    const spacing = opts.spacing === undefined ? 2 : opts.spacing;
    const isHeader = opts.isHeader === undefined ? true : opts.isHeader;

    const columnWidthMap = mapColumnWidth(table, spacing);
    const tableRowString = [];
    const paddedTable = transformTable(table, columnWidthMap, spacing);

    if(isHeader) {
        tableRowString.push(getLine(columnWidthMap));
        tableRowString.push(convertRowToString(paddedTable[0]));
        tableRowString.push(getLine(columnWidthMap));
        for (let i = 1; i < paddedTable.length; i++) {
            const row = paddedTable[i];
            tableRowString.push(convertRowToString(row))
        }
        tableRowString.push(getLine(columnWidthMap));
    } else {
        tableRowString.push(getLine(columnWidthMap));
        for (let i = 0; i < paddedTable.length; i++) {
            const row = paddedTable[i];
            tableRowString.push(convertRowToString(row))
        }
        tableRowString.push(getLine(columnWidthMap));
    }
    return tableRowString.join('\n');
};

const convertRowToString = (row) => {
    let str = '|';
    for (let i = 0; i < row.length; i++) {
        str += `${row[i]}|`;
    }
    return str;
}

const transformTable = (table, columnWidthMap, spacing) => {
    let transTable = [];
    for (let i = 0; i < table.length; i++) {
        const row = table[i];
        let rowArray = [];
        for (let j = 0; j < row.length; j++) {
            let cellValue = table[i][j];
            const leftPadded = cellValue.padStart(cellValue.length + spacing,' ');
            const padded = leftPadded.padEnd(columnWidthMap[j], ' ');
            rowArray.push(padded);
        }
        transTable.push(rowArray);
    }
    return transTable;
}
const getLine = (columnWidthMap) => {
    let line = '+';
    for (let i = 0; i < columnWidthMap.length; i++) {
        const repeatValue = columnWidthMap[i];
        for (let j = 0; j < repeatValue; j++) {
            line += '-';
        }
        line += '+';
    }
    return line;
}

const mapColumnWidth = (table, spacing) => {
    let columnWidthMap = new Array(table[0].length).fill(0);
    for(let i = 0; i < table.length; i++) {
        for(let j = 0; j < table[0].length; j++) {
            const cellValue = table[i][j];
            if(columnWidthMap[j] < cellValue.length) {
                columnWidthMap[j] = cellValue.length;
            }
        }
    }
    // Add spacing length
    for (let i = 0; i < columnWidthMap.length; i++) {
        columnWidthMap[i] = columnWidthMap[i] + (spacing*2);
    }
    return columnWidthMap;
}