"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExpensenlineDocumentResponse = (function () {
    function ExpensenlineDocumentResponse() {
    }
    ExpensenlineDocumentResponse.getAttributeTypeMap = function () {
        return ExpensenlineDocumentResponse.attributeTypeMap;
    };
    ExpensenlineDocumentResponse.discriminator = undefined;
    ExpensenlineDocumentResponse.attributeTypeMap = [
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
            "name": "data",
            "baseName": "data",
            "type": "ExpenseInlineDocument"
        }
    ];
    return ExpensenlineDocumentResponse;
}());
exports.ExpensenlineDocumentResponse = ExpensenlineDocumentResponse;
//# sourceMappingURL=expensenlineDocumentResponse.js.map