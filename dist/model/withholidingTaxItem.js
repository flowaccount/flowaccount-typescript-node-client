"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WithholidingTaxItem {
    static getAttributeTypeMap() {
        return WithholidingTaxItem.attributeTypeMap;
    }
}
exports.WithholidingTaxItem = WithholidingTaxItem;
WithholidingTaxItem.discriminator = undefined;
WithholidingTaxItem.attributeTypeMap = [
    {
        "name": "incomeType",
        "baseName": "incomeType",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "taxRate",
        "baseName": "taxRate",
        "type": "number"
    },
    {
        "name": "taxAmount",
        "baseName": "taxAmount",
        "type": "number"
    },
    {
        "name": "taxAmountNoVat",
        "baseName": "taxAmountNoVat",
        "type": "number"
    },
    {
        "name": "withheld",
        "baseName": "withheld",
        "type": "number"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "vatType",
        "baseName": "vatType",
        "type": "number"
    }
];
//# sourceMappingURL=withholidingTaxItem.js.map