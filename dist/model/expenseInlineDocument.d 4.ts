import { ExpenseInlineProductItem } from './expenseInlineProductItem';
export declare class ExpenseInlineDocument {
    'documentSerial'?: string;
    'contactCode'?: string;
    'contactName': string;
    'contactAddress'?: string;
    'contactTaxId'?: string;
    'contactBranch'?: string;
    'contactPerson'?: string;
    'contactEmail'?: string;
    'contactNumber'?: string;
    'contactZipCode'?: string;
    'publishedOn': string;
    'creditType'?: number;
    'creditDays'?: number;
    'dueDate'?: string;
    'salesName'?: string;
    'projectName'?: string;
    'reference'?: string;
    'isVatInclusive'?: boolean;
    'discountType'?: number;
    'items'?: Array<ExpenseInlineProductItem>;
    'subTotal': number;
    'discountAmount'?: number;
    'totalAfterDiscount': number;
    'exemptAmount'?: number;
    'vatableAmount'?: number;
    'vatAmount'?: number;
    'grandTotal': number;
    'remarks'?: string;
    'internalNotes'?: string;
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
