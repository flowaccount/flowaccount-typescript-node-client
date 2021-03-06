/**
 * FlowAccount Open API
 * FlowAccount.com โปรแกรมบัญชีออนไลน์ใช้งานง่าย สำหรับธุรกิจที่พึ่งเริ่มต้น   # Introduction **Servers Production**    site: https://www.flowaccount.com    api url: https://openapi.flowaccount.com/v1    **Beta test**   site: http://sandbox-new.flowaccount.com/    api url: https://openapi.flowaccount.com/test
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ExpenseSimpleProductItem {
    /**
    * เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ)
    */
    'systemCode': number;
    /**
    * เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) <br> <ex>Example: 40238</ex>
    */
    'categoryId': number;
    /**
    * รายละเอียดค่าใช้จ่าย
    */
    'description': string;
    /**
    * ชื่อหมวดหมู่ค่าใช้จ่าย <br> <ex>Example: การตลาดและโฆษณา</ex>
    */
    'nameLocal': string;
    /**
    * ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) <br> <ex>Example: Marketing & Advertising</ex>
    */
    'nameForeign': string;
    /**
    * เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย <br> <ex>Example: 2</ex>
    */
    'creditCategory': number;
    /**
    * เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต <br> <ex>Example: 1081994</ex>
    */
    'creditId': number;
    /**
    * เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต <br> <ex>Example: 21399</ex>
    */
    'creditCode': string;
    /**
    * ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต <br> <ex>Example: 21399 / เจ้าหนี้อื่นๆ</ex>
    */
    'creditNameLocal': string;
    /**
    * ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) <br> <ex>Example: 21399 / Other Payables</ex>
    */
    'creditNameForeign': string;
    /**
    * เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย
    */
    'debitCategory': number;
    /**
    * เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 1082099</ex>
    */
    'debitId': number;
    /**
    * เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 53029</ex>
    */
    'debitCode': string;
    /**
    * ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 53029 / ค่าใช้จ่ายด้านโฆษณาและการตลาดอื่นๆ</ex>
    */
    'debitNameLocal': string;
    /**
    * ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) <br> <ex>Example: 53029 / Other advertising and marketing expenses</ex>
    */
    'debitNameForeign': string;
    /**
    * จำนวนรายการค่าใช้จ่าย
    */
    'quantity': number;
    /**
    * หน่วยรายการค่าใช้จ่าย
    */
    'unitName'?: string;
    /**
    * ราคาต่อหน่วยค่าใช้จ่าย
    */
    'pricePerUnit': number;
    /**
    * ราคารวมค่าใช้จ่าย
    */
    'total': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "nameLocal",
            "baseName": "nameLocal",
            "type": "string"
        },
        {
            "name": "nameForeign",
            "baseName": "nameForeign",
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
            "name": "creditNameLocal",
            "baseName": "creditNameLocal",
            "type": "string"
        },
        {
            "name": "creditNameForeign",
            "baseName": "creditNameForeign",
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
            "name": "debitNameLocal",
            "baseName": "debitNameLocal",
            "type": "string"
        },
        {
            "name": "debitNameForeign",
            "baseName": "debitNameForeign",
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
            "name": "total",
            "baseName": "total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ExpenseSimpleProductItem.attributeTypeMap;
    }
}

