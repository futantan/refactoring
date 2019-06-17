const { statement } = require("./statement");
const invoices = require("./invoices");
const plays = require("./plays");

const result = statement(invoices[0], plays);
console.log(result);
