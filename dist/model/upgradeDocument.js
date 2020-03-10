"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpgradeDocument {
    static getAttributeTypeMap() {
        return UpgradeDocument.attributeTypeMap;
    }
}
exports.UpgradeDocument = UpgradeDocument;
UpgradeDocument.discriminator = undefined;
UpgradeDocument.attributeTypeMap = [
    {
        "name": "recordId",
        "baseName": "recordId",
        "type": "number"
    },
    {
        "name": "referenceDocumentSerial",
        "baseName": "referenceDocumentSerial",
        "type": "string"
    },
    {
        "name": "referenceDocumentType",
        "baseName": "referenceDocumentType",
        "type": "number"
    }
];
//# sourceMappingURL=upgradeDocument.js.map