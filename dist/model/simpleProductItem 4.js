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
var SimpleProductItem = (function (_super) {
    __extends(SimpleProductItem, _super);
    function SimpleProductItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleProductItem.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SimpleProductItem.attributeTypeMap);
    };
    SimpleProductItem.discriminator = undefined;
    SimpleProductItem.attributeTypeMap = [];
    return SimpleProductItem;
}(productItem_1.ProductItem));
exports.SimpleProductItem = SimpleProductItem;
//# sourceMappingURL=simpleProductItem.js.map