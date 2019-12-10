import { SimpleProductItem } from './simpleProductItem';
export declare class SimpleDocumentAllOf {
    'items'?: Array<SimpleProductItem>;
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
