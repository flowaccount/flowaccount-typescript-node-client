"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductResponse {
    static getAttributeTypeMap() {
        return ProductResponse.attributeTypeMap;
    }
}
exports.ProductResponse = ProductResponse;
ProductResponse.discriminator = undefined;
ProductResponse.attributeTypeMap = [
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
        "type": "ProductResponseData"
    }
];
//# sourceMappingURL=productResponse.js.map