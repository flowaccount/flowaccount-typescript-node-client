"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineProductItemAllOf = (function () {
    function InlineProductItemAllOf() {
    }
    InlineProductItemAllOf.getAttributeTypeMap = function () {
        return InlineProductItemAllOf.attributeTypeMap;
    };
    InlineProductItemAllOf.discriminator = undefined;
    InlineProductItemAllOf.attributeTypeMap = [
        {
            "name": "discountAmountPercentage",
            "baseName": "discountAmountPercentage",
            "type": "number"
        },
        {
            "name": "discountAmount",
            "baseName": "discountAmount",
            "type": "number"
        },
        {
            "name": "vatRate",
            "baseName": "vatRate",
            "type": "number"
        }
    ];
    return InlineProductItemAllOf;
}());
exports.InlineProductItemAllOf = InlineProductItemAllOf;
//# sourceMappingURL=inlineProductItemAllOf.js.map