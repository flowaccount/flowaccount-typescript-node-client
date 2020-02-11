"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentDocument {
    static getAttributeTypeMap() {
        return PaymentDocument.attributeTypeMap;
    }
}
PaymentDocument.discriminator = undefined;
PaymentDocument.attributeTypeMap = [
    {
        "name": "documentId",
        "baseName": "documentId",
        "type": "number"
    },
    {
        "name": "dateNow",
        "baseName": "dateNow",
        "type": "string"
    },
    {
        "name": "collected",
        "baseName": "collected",
        "type": "number"
    },
    {
        "name": "paymentDeductionType",
        "baseName": "paymentDeductionType",
        "type": "number"
    },
    {
        "name": "deductionAmount",
        "baseName": "deductionAmount",
        "type": "number"
    },
    {
        "name": "withheldPercentage",
        "baseName": "withheldPercentage",
        "type": "number"
    },
    {
        "name": "withheldAmount",
        "baseName": "withheldAmount",
        "type": "number"
    },
    {
        "name": "charge",
        "baseName": "charge",
        "type": "number"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "number"
    },
    {
        "name": "transferBankAccountId",
        "baseName": "transferBankAccountId",
        "type": "number"
    },
    {
        "name": "bankAccountId",
        "baseName": "BankAccountId",
        "type": "number"
    },
    {
        "name": "chequeDate",
        "baseName": "chequeDate",
        "type": "string"
    },
    {
        "name": "chequeNumber",
        "baseName": "chequeNumber",
        "type": "string"
    },
    {
        "name": "chequeBankAccountId",
        "baseName": "chequeBankAccountId",
        "type": "number"
    },
    {
        "name": "creditCardBankAccountId",
        "baseName": "creditCardBankAccountId",
        "type": "number"
    },
    {
        "name": "remarks",
        "baseName": "remarks",
        "type": "string"
    },
    {
        "name": "remainingCollectedType",
        "baseName": "remainingCollectedType",
        "type": "number"
    },
    {
        "name": "remainingCollected",
        "baseName": "remainingCollected",
        "type": "number"
    }
];
exports.PaymentDocument = PaymentDocument;
//# sourceMappingURL=paymentDocument.js.map