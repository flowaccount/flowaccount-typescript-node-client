"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WithholidingTaxDocumentResponse {
    static getAttributeTypeMap() {
        return WithholidingTaxDocumentResponse.attributeTypeMap;
    }
}
exports.WithholidingTaxDocumentResponse = WithholidingTaxDocumentResponse;
WithholidingTaxDocumentResponse.discriminator = undefined;
WithholidingTaxDocumentResponse.attributeTypeMap = [
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
        "type": "WithholidingTaxDocumentResponseData"
    }
];
//# sourceMappingURL=withholidingTaxDocumentResponse.js.map