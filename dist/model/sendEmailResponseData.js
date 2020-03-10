"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendEmailResponseData {
    static getAttributeTypeMap() {
        return SendEmailResponseData.attributeTypeMap;
    }
}
exports.SendEmailResponseData = SendEmailResponseData;
SendEmailResponseData.discriminator = undefined;
SendEmailResponseData.attributeTypeMap = [
    {
        "name": "ok",
        "baseName": "ok",
        "type": "boolean"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "successMsg",
        "baseName": "successMsg",
        "type": "string"
    }
];
//# sourceMappingURL=sendEmailResponseData.js.map