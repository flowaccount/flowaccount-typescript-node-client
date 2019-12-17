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
var document_1 = require("./document");
var InlineDocument = (function (_super) {
    __extends(InlineDocument, _super);
    function InlineDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineDocument.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(InlineDocument.attributeTypeMap);
    };
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
    return InlineDocument;
}(document_1.Document));
exports.InlineDocument = InlineDocument;
//# sourceMappingURL=inlineDocument.js.map