"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendEmailResponse {
    static getAttributeTypeMap() {
        return SendEmailResponse.attributeTypeMap;
    }
}
SendEmailResponse.discriminator = undefined;
SendEmailResponse.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "ok",
        "baseName": "ok",
        "type": "boolean"
    },
    {
        "name": "successMsg",
        "baseName": "successMsg",
        "type": "string"
    }
];
exports.SendEmailResponse = SendEmailResponse;
//# sourceMappingURL=sendEmailResponse.js.map