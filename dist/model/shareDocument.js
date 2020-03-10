"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShareDocument {
    static getAttributeTypeMap() {
        return ShareDocument.attributeTypeMap;
    }
}
exports.ShareDocument = ShareDocument;
ShareDocument.discriminator = undefined;
ShareDocument.attributeTypeMap = [
    {
        "name": "documentId",
        "baseName": "documentId",
        "type": "number"
    },
    {
        "name": "culture",
        "baseName": "culture",
        "type": "string"
    }
];
//# sourceMappingURL=shareDocument.js.map