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
Object.defineProperty(exports, "__esModule", { value: true });
var sendEmail_1 = require("./sendEmail");
var SendEmailSimple = (function (_super) {
    __extends(SendEmailSimple, _super);
    function SendEmailSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendEmailSimple.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SendEmailSimple.attributeTypeMap);
    };
    SendEmailSimple.discriminator = undefined;
    SendEmailSimple.attributeTypeMap = [];
    return SendEmailSimple;
}(sendEmail_1.SendEmail));
exports.SendEmailSimple = SendEmailSimple;
//# sourceMappingURL=sendEmailSimple.js.map