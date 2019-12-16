import { DocumentResponse } from './documentResponse';
import { InlineDocument } from './inlineDocument';
export declare class InlineDocumentResponse extends DocumentResponse {
    'data'?: InlineDocument;
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