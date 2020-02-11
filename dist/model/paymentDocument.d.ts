export declare class PaymentDocument {
    'documentId': number;
    'dateNow': string;
    'collected': number;
    'paymentDeductionType'?: number;
    'deductionAmount'?: number;
    'withheldPercentage'?: number;
    'withheldAmount'?: number;
    'charge'?: number;
    'paymentMethod': number;
    'transferBankAccountId'?: number;
    'bankAccountId'?: number;
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
