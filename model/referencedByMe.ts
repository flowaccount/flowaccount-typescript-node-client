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


export class ReferencedByMe {
    /**
    * ID เอกสารฉบับนี้
    */
    'referenceId'?: number;
    /**
    * ประเภทของเอกสารฉบับนี้
    */
    'referenceDocumentType'?: number;
    /**
    * เลขที่เอกสารฉบับนี้
    */
    'referenceDocumentSerial'?: string;
    /**
    * ID เอกสารต้นทางที่อ้างอิง ถึง เอกสารฉบับนี้
    */
    'documentId'?: number;
    /**
    * เลขที่เอกสารต้นทางที่อ้างอิง ถึง เอกสารฉบับนี้
    */
    'documentSerial'?: number;
    'type'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "referenceId",
            "baseName": "referenceId",
            "type": "number"
        },
        {
            "name": "referenceDocumentType",
            "baseName": "referenceDocumentType",
            "type": "number"
        },
        {
            "name": "referenceDocumentSerial",
            "baseName": "referenceDocumentSerial",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "number"
        },
        {
            "name": "documentSerial",
            "baseName": "documentSerial",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ReferencedByMe.attributeTypeMap;
    }
}

