"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineDocumentAllOf = (function () {
    function InlineDocumentAllOf() {
    }
    InlineDocumentAllOf.getAttributeTypeMap = function () {
        return InlineDocumentAllOf.attributeTypeMap;
    };
    InlineDocumentAllOf.discriminator = undefined;
    InlineDocumentAllOf.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<InlineProductItem>"
        },
        {
            "name": "useInlineVat",
            "baseName": "useInlineVat",
            "type": "boolean"
        },
        {
            "name": "exemptAmount",
            "baseName": "exemptAmount",
            "type": "number"
        },
        {
            "name": "vatableAmount",
            "baseName": "vatableAmount",
            "type": "number"
        }
    ];
    return InlineDocumentAllOf;
}());
exports.InlineDocumentAllOf = InlineDocumentAllOf;
//# sourceMappingURL=inlineDocumentAllOf.js.map