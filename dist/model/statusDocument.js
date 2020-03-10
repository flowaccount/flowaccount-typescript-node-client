"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatusDocument {
    static getAttributeTypeMap() {
        return StatusDocument.attributeTypeMap;
    }
}
exports.StatusDocument = StatusDocument;
StatusDocument.discriminator = undefined;
StatusDocument.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "number"
    },
    {
        "name": "statusString",
        "baseName": "statusString",
        "type": "number"
    },
    {
        "name": "documentType",
        "baseName": "documentType",
        "type": "number"
    },
    {
        "name": "allowDelete",
        "baseName": "allowDelete",
        "type": "boolean"
    }
];
//# sourceMappingURL=statusDocument.js.map