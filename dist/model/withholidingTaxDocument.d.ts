import { WithholidingTaxItem } from './withholidingTaxItem';
export declare class WithholidingTaxDocument {
    'contactCode'?: string;
    'contactName': string;
    'contactAddress'?: string;
    'contactTaxId'?: string;
    'contactBranch'?: string;
    'contactPerson'?: string;
    'contactEmail'?: string;
    'contactNumber'?: string;
    'contactZipCode'?: string;
    'contactGroup'?: number;
    'publishedOn': string;
    'entity': number;
    'textOther'?: string;
    'withholdingTaxItems': Array<WithholidingTaxItem>;
    'total': number;
    'totalTaxWithheld': number;
    'taxPayment'?: number;
    'taxPaymentOthers'?: string;
    'providentFundNumber'?: string;
    'providentFundAmount'?: string;
    'socialSecurityAmount'?: string;
    'remarks'?: string;
    'internalNotes'?: string;
    'showSignatureOrStamp'?: boolean;
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
