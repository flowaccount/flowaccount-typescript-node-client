export declare class ExpenseSimpleProductItem {
    'description': string;
    'systemCode': number;
    'categoryId': number;
    'nameForeign': string;
    'nameLocal': string;
    'creditCategory': number;
    'creditId': number;
    'creditCode': string;
    'creditNameForeign': string;
    'creditNameLocal': string;
    'debitCategory': number;
    'debitId': number;
    'debitCode': string;
    'debitNameForeign': string;
    'debitNameLocal': string;
    'quantity': number;
    'unitName'?: string;
    'pricePerUnit': number;
    'total': number;
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
