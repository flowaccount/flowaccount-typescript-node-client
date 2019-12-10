import { ExpenseInlineDocument } from './expenseInlineDocument';
export declare class ExpensenlineDocumentResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: ExpenseInlineDocument;
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
