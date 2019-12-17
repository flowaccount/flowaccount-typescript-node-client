"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DocumentResponse = (function () {
    function DocumentResponse() {
    }
    DocumentResponse.getAttributeTypeMap = function () {
        return DocumentResponse.attributeTypeMap;
    };
    DocumentResponse.discriminator = "documentStructureType";
    DocumentResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "boolean"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "documentStructureType",
            "baseName": "documentStructureType",
            "type": "string"
        }
    ];
    return DocumentResponse;
}());
exports.DocumentResponse = DocumentResponse;
//# sourceMappingURL=documentResponse.js.map