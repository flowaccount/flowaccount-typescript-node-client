"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleDocumentAllOf {
    static getAttributeTypeMap() {
        return SimpleDocumentAllOf.attributeTypeMap;
    }
}
exports.SimpleDocumentAllOf = SimpleDocumentAllOf;
SimpleDocumentAllOf.discriminator = undefined;
SimpleDocumentAllOf.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<SimpleProductItem>"
    },
    {
        "name": "documentReference",
        "baseName": "documentReference",
        "type": "Array<UpgradeDocument>"
    }
];
//# sourceMappingURL=simpleDocumentAllOf.js.map