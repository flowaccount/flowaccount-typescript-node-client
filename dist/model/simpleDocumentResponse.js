"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documentResponse_1 = require("./documentResponse");
class SimpleDocumentResponse extends documentResponse_1.DocumentResponse {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SimpleDocumentResponse.attributeTypeMap);
    }
}
exports.SimpleDocumentResponse = SimpleDocumentResponse;
SimpleDocumentResponse.discriminator = undefined;
SimpleDocumentResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
    }
];
//# sourceMappingURL=simpleDocumentResponse.js.map