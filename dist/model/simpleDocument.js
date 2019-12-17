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
var SimpleDocument = (function (_super) {
    __extends(SimpleDocument, _super);
    function SimpleDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleDocument.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SimpleDocument.attributeTypeMap);
    };
    SimpleDocument.discriminator = undefined;
    SimpleDocument.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<SimpleProductItem>"
        }
    ];
    return SimpleDocument;
}(document_1.Document));
exports.SimpleDocument = SimpleDocument;
//# sourceMappingURL=simpleDocument.js.map