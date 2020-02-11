export declare class PaymentDocumentResponse {
    'documentId'?: number;
    'paymentDate'?: string;
    'collected'?: number;
    'paymentDeductionType'?: number;
    'deductionAmount'?: number;
    'withheldPercentage'?: number;
    'withheldAmount'?: number;
    'charge'?: number;
    'paymentMethod'?: number;
    'paymentChannel'?: string;
    'paymentRemarks'?: string;
    'bankAccountName'?: string;
    'bankAccountNumber'?: string;
    'chequeDate'?: string;
    'chequeNumber'?: string;
    'chequeBankAccountId'?: number;
    'creditCardBankAccountId'?: number;
    'remarks'?: string;
    'remainingCollectedType'?: number;
    'remainingCollected'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
