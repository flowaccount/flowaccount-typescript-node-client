import { Document } from './document';
import { InlineProductItem } from './inlineProductItem';
export declare class InlineDocument extends Document {
    'items'?: Array<InlineProductItem>;
    'useInlineVat'?: boolean;
    'exemptAmount'?: number;
    'vatableAmount'?: number;
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
