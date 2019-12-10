"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./authenticationApi"));
const authenticationApi_1 = require("./authenticationApi");
__export(require("./billingNotesApi"));
const billingNotesApi_1 = require("./billingNotesApi");
__export(require("./cashInvoiceApi"));
const cashInvoiceApi_1 = require("./cashInvoiceApi");
__export(require("./expenseApi"));
const expenseApi_1 = require("./expenseApi");
__export(require("./quotationsApi"));
const quotationsApi_1 = require("./quotationsApi");
__export(require("./reportApi"));
const reportApi_1 = require("./reportApi");
__export(require("./taxInvoiceApi"));
const taxInvoiceApi_1 = require("./taxInvoiceApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [authenticationApi_1.AuthenticationApi, billingNotesApi_1.BillingNotesApi, cashInvoiceApi_1.CashInvoiceApi, expenseApi_1.ExpenseApi, quotationsApi_1.QuotationsApi, reportApi_1.ReportApi, taxInvoiceApi_1.TaxInvoiceApi];
//# sourceMappingURL=apis.js.map