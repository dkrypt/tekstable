'use strict';

const tekstable = require('../main');

const tableData = [
    ['No', 'Name', 'UUID', 'Scope', 'Enabled'],
    ['1', 'MDD_AvroRecordSetWriter', 'd49ba7c7-016a-1000-0000-00005519f6d2', 'Global', 'false'],
    ['2', 'MDD_AvroRecordSetWriter', 'd49ba7c7-016a-1000-0000-00005519f6d2', 'Global', 'false']
]

console.log(tekstable(tableData, { spacing: 2, isHeader: true}));