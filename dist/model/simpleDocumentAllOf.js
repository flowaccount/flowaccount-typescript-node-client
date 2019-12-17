"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleDocumentAllOf = (function () {
    function SimpleDocumentAllOf() {
    }
    SimpleDocumentAllOf.getAttributeTypeMap = function () {
        return SimpleDocumentAllOf.attributeTypeMap;
    };
    SimpleDocumentAllOf.discriminator = undefined;
    SimpleDocumentAllOf.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<SimpleProductItem>"
        }
    ];
    return SimpleDocumentAllOf;
}());
exports.SimpleDocumentAllOf = SimpleDocumentAllOf;
//# sourceMappingURL=simpleDocumentAllOf.js.map