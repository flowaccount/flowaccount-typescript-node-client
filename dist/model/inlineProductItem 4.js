"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var productItem_1 = require("./productItem");
var InlineProductItem = (function (_super) {
    __extends(InlineProductItem, _super);
    function InlineProductItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineProductItem.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(InlineProductItem.attributeTypeMap);
    };
    InlineProductItem.discriminator = undefined;
    InlineProductItem.attributeTypeMap = [
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
    return InlineProductItem;
}(productItem_1.ProductItem));
exports.InlineProductItem = InlineProductItem;
//# sourceMappingURL=inlineProductItem.js.map