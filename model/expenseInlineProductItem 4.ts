/**
 * FlowAccount Open API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2-oas3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ExpenseInlineProductItem {
    /**
    * description expense
    */
    'description': string;
    /**
    * system code
    */
    'systemCode': number;
    /**
    * id of expense category
    */
    'categoryId': number;
    /**
    * name foreign of expense category
    */
    'nameForeign': string;
    /**
    * name local of expense category
    */
    'nameLocal': string;
    /**
    * credit category
    */
    'creditCategory': number;
    /**
    * id of expense credit
    */
    'creditId': number;
    /**
    * code of expense credit category
    */
    'creditCode': string;
    /**
    * name foreign of expense credit category
    */
    'creditNameForeign': string;
    /**
    * name local of expense credit category
    */
    'creditNameLocal': string;
    /**
    * debit category
    */
    'debitCategory': number;
    /**
    * id of expense debit
    */
    'debitId': number;
    /**
    * code of expense debit category
    */
    'debitCode': string;
    /**
    * name foreign of expense debit category
    */
    'debitNameForeign': string;
    /**
    * name local of expense debit category
    */
    'debitNameLocal': string;
    /**
    * จำนวนรายการ
    */
    'quantity': number;
    /**
    * หน่วยรายการ
    */
    'unitName'?: string;
    /**
    * มูลค่าค่าใช้จ่าย
    */
    'pricePerUnit': number;
    /**
    * ส่วนลด
    */
    'discountAmount': number;
    /**
    * ภาษี
    */
    'vatRate': number;
    /**
    * มูลค่ารวม
    */
    'total': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "systemCode",
            "baseName": "systemCode",
            "type": "number"
        },
        {
            "name": "categoryId",
            "baseName": "categoryId",
            "type": "number"
        },
        {
            "name": "nameForeign",
            "baseName": "nameForeign",
            "type": "string"
        },
        {
            "name": "nameLocal",
            "baseName": "nameLocal",
            "type": "string"
        },
        {
            "name": "creditCategory",
            "baseName": "creditCategory",
            "type": "number"
        },
        {
            "name": "creditId",
            "baseName": "creditId",
            "type": "number"
        },
        {
            "name": "creditCode",
            "baseName": "creditCode",
            "type": "string"
        },
        {
            "name": "creditNameForeign",
            "baseName": "creditNameForeign",
            "type": "string"
        },
        {
            "name": "creditNameLocal",
            "baseName": "creditNameLocal",
            "type": "string"
        },
        {
            "name": "debitCategory",
            "baseName": "debitCategory",
            "type": "number"
        },
        {
            "name": "debitId",
            "baseName": "debitId",
            "type": "number"
        },
        {
            "name": "debitCode",
            "baseName": "debitCode",
            "type": "string"
        },
        {
            "name": "debitNameForeign",
            "baseName": "debitNameForeign",
            "type": "string"
        },
        {
            "name": "debitNameLocal",
            "baseName": "debitNameLocal",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "unitName",
            "baseName": "unitName",
            "type": "string"
        },
        {
            "name": "pricePerUnit",
            "baseName": "pricePerUnit",
            "type": "number"
        },
        {
            "name": "discountAmount",
            "baseName": "discountAmount",
            "type": "number"
        },
        {
            "name": "vatRate",
            "baseName": "vatRate",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ExpenseInlineProductItem.attributeTypeMap;
    }
}
