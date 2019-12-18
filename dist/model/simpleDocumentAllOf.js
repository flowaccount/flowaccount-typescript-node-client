"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleDocumentAllOf {
    static getAttributeTypeMap() {
        return SimpleDocumentAllOf.attributeTypeMap;
    }
}
SimpleDocumentAllOf.discriminator = undefined;
SimpleDocumentAllOf.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<SimpleProductItem>"
    }
];
exports.SimpleDocumentAllOf = SimpleDocumentAllOf;
//# sourceMappingURL=simpleDocumentAllOf.js.map