"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShareDocumentResponse {
    static getAttributeTypeMap() {
        return ShareDocumentResponse.attributeTypeMap;
    }
}
exports.ShareDocumentResponse = ShareDocumentResponse;
ShareDocumentResponse.discriminator = undefined;
ShareDocumentResponse.attributeTypeMap = [
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
        "type": "ShareDocumentResponseData"
    }
];
//# sourceMappingURL=shareDocumentResponse.js.map