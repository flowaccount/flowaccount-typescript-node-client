"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttachmentResponseData {
    static getAttributeTypeMap() {
        return AttachmentResponseData.attributeTypeMap;
    }
}
exports.AttachmentResponseData = AttachmentResponseData;
AttachmentResponseData.discriminator = undefined;
AttachmentResponseData.attributeTypeMap = [
    {
        "name": "attachmentId",
        "baseName": "attachmentId",
        "type": "number"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "object"
    },
    {
        "name": "attachmentName",
        "baseName": "attachmentName",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "isDisplay",
        "baseName": "isDisplay",
        "type": "boolean"
    },
    {
        "name": "attachmentPath",
        "baseName": "attachmentPath",
        "type": "string"
    }
];
//# sourceMappingURL=attachmentResponseData.js.map