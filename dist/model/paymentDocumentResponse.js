"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentDocumentResponse {
    static getAttributeTypeMap() {
        return PaymentDocumentResponse.attributeTypeMap;
    }
}
PaymentDocumentResponse.discriminator = undefined;
PaymentDocumentResponse.attributeTypeMap = [
    {
        "name": "documentId",
        "baseName": "documentId",
        "type": "number"
    },
    {
        "name": "paymentDate",
        "baseName": "paymentDate",
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
        "name": "paymentChannel",
        "baseName": "paymentChannel",
        "type": "string"
    },
    {
        "name": "paymentRemarks",
        "baseName": "paymentRemarks",
        "type": "string"
    },
    {
        "name": "bankAccountName",
        "baseName": "bankAccountName",
        "type": "string"
    },
    {
        "name": "bankAccountNumber",
        "baseName": "bankAccountNumber",
        "type": "string"
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
exports.PaymentDocumentResponse = PaymentDocumentResponse;
//# sourceMappingURL=paymentDocumentResponse.js.map