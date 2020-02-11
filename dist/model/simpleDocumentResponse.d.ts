import { DocumentResponse } from './documentResponse';
import { SimpleDocument } from './simpleDocument';
import { StatusResponse } from './statusResponse';
export declare class SimpleDocumentResponse extends DocumentResponse {
    'data'?: object & SimpleDocument & StatusResponse;
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
