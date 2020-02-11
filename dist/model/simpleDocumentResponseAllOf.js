"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleDocumentResponseAllOf {
    static getAttributeTypeMap() {
        return SimpleDocumentResponseAllOf.attributeTypeMap;
    }
}
SimpleDocumentResponseAllOf.discriminator = undefined;
SimpleDocumentResponseAllOf.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "object & SimpleDocument & StatusResponse"
    }
];
exports.SimpleDocumentResponseAllOf = SimpleDocumentResponseAllOf;
//# sourceMappingURL=simpleDocumentResponseAllOf.js.map