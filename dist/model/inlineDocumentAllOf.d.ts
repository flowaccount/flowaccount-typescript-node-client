import { InlineProductItem } from './inlineProductItem';
import { UpgradeDocument } from './upgradeDocument';
export declare class InlineDocumentAllOf {
    'useInlineDiscount'?: boolean;
    'useInlineVat'?: boolean;
    'exemptAmount'?: number;
    'vatableAmount'?: number;
    'items'?: Array<InlineProductItem>;
    'documentReferences'?: Array<UpgradeDocument>;
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
