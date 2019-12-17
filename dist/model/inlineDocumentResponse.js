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
var documentResponse_1 = require("./documentResponse");
var InlineDocumentResponse = (function (_super) {
    __extends(InlineDocumentResponse, _super);
    function InlineDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineDocumentResponse.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(InlineDocumentResponse.attributeTypeMap);
    };
    InlineDocumentResponse.discriminator = undefined;
    InlineDocumentResponse.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "InlineDocument"
        }
    ];
    return InlineDocumentResponse;
}(documentResponse_1.DocumentResponse));
exports.InlineDocumentResponse = InlineDocumentResponse;
//# sourceMappingURL=inlineDocumentResponse.js.map