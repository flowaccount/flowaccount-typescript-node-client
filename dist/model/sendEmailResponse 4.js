"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SendEmailResponse = (function () {
    function SendEmailResponse() {
    }
    SendEmailResponse.getAttributeTypeMap = function () {
        return SendEmailResponse.attributeTypeMap;
    };
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
    return SendEmailResponse;
}());
exports.SendEmailResponse = SendEmailResponse;
//# sourceMappingURL=sendEmailResponse.js.map