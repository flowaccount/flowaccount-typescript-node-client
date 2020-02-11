import { DocumentResponse } from './documentResponse';
import { InlineDocument } from './inlineDocument';
import { StatusResponse } from './statusResponse';
export declare class InlineDocumentResponse extends DocumentResponse {
    'data'?: object & InlineDocument & StatusResponse;
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
