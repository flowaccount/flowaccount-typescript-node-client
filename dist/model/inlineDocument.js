"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const document_1 = require("./document");
class InlineDocument extends document_1.Document {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InlineDocument.attributeTypeMap);
    }
}
InlineDocument.discriminator = undefined;
InlineDocument.attributeTypeMap = [
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
exports.InlineDocument = InlineDocument;
//# sourceMappingURL=inlineDocument.js.map