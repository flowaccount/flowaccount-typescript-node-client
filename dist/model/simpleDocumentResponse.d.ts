import { DocumentResponse } from './documentResponse';
import { SimpleDocument } from './simpleDocument';
export declare class SimpleDocumentResponse extends DocumentResponse {
    'data'?: SimpleDocument;
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
