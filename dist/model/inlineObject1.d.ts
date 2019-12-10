export declare class InlineObject1 {
    'grantType'?: string;
    'scope'?: string;
    'clientId'?: string;
    'clientSecret'?: string;
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
