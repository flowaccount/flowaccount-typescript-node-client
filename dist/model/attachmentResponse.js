"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttachmentResponse {
    static getAttributeTypeMap() {
        return AttachmentResponse.attributeTypeMap;
    }
}
exports.AttachmentResponse = AttachmentResponse;
AttachmentResponse.discriminator = undefined;
AttachmentResponse.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "boolean"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AttachmentResponseData"
    }
];
//# sourceMappingURL=attachmentResponse.js.map