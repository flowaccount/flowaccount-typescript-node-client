"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShareDocument {
    static getAttributeTypeMap() {
        return ShareDocument.attributeTypeMap;
    }
}
ShareDocument.discriminator = "documentStructureType";
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
exports.ShareDocument = ShareDocument;
//# sourceMappingURL=shareDocument.js.map