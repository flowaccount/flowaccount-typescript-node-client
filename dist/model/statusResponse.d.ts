import { ReferencedByMe } from './referencedByMe';
import { ReferencedToMe } from './referencedToMe';
export declare class StatusResponse {
    'recordId'?: number;
    'referencedToMe'?: Array<ReferencedToMe>;
    'referencedByMe'?: Array<ReferencedByMe>;
    'status'?: number;
    'statusString'?: number;
    'documentType'?: number;
    'allowDelete'?: boolean;
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
