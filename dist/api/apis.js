"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./authenticationApi"));
var authenticationApi_1 = require("./authenticationApi");
__export(require("./billingNotesApi"));
var billingNotesApi_1 = require("./billingNotesApi");
__export(require("./cashInvoiceApi"));
var cashInvoiceApi_1 = require("./cashInvoiceApi");
__export(require("./expenseApi"));
var expenseApi_1 = require("./expenseApi");
__export(require("./quotationsApi"));
var quotationsApi_1 = require("./quotationsApi");
__export(require("./reportApi"));
var reportApi_1 = require("./reportApi");
__export(require("./taxInvoiceApi"));
var taxInvoiceApi_1 = require("./taxInvoiceApi");
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [authenticationApi_1.AuthenticationApi, billingNotesApi_1.BillingNotesApi, cashInvoiceApi_1.CashInvoiceApi, expenseApi_1.ExpenseApi, quotationsApi_1.QuotationsApi, reportApi_1.ReportApi, taxInvoiceApi_1.TaxInvoiceApi];
//# sourceMappingURL=apis.js.map