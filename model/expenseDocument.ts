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

import { ExpenseSimpleProductItem } from './expenseSimpleProductItem';

export class ExpenseDocument {
    /**
    * เลขที่เอกสาร
    */
    'documentSerial'?: string;
    /**
    * รหัส ผู้ติดต่อ/ผู้จำหน่าย
    */
    'contactCode'?: string;
    /**
    * ชื่อบริษัท
    */
    'contactName': string;
    /**
    * ที่อยู่ ผู้ติดต่อ/ผู้จำหน่าย
    */
    'contactAddress'?: string;
    /**
    * เลขประจำตัวผู้เสียภาษี ผู้ติิดต่อ/ผู้จำหน่าย
    */
    'contactTaxId'?: string;
    /**
    * สำนักงาน/สาขา
    */
    'contactBranch'?: string;
    /**
    * ชื่อผู้ติดต่อ
    */
    'contactPerson'?: string;
    /**
    * อีเมลผู้ติดต่อ
    */
    'contactEmail'?: string;
    /**
    * เบอร์มือถือผู้ติดต่อ
    */
    'contactNumber'?: string;
    /**
    * รหัสไปรษณีย์ติดต่อ
    */
    'contactZipCode'?: string;
    /**
    * วันที่เอกสาร รูปแบบ yyyy-MM-dd
    */
    'publishedOn': string;
    /**
    * รูปแบบเครดิต: 1 = เครดิต (วัน) / 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
    */
    'creditType'?: number;
    /**
    * จำนวนวันที่ให้เครดิต
    */
    'creditDays'?: number;
    /**
    * วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd
    */
    'dueDate'?: string;
    /**
    * พนักงานขาย
    */
    'salesName'?: string;
    /**
    * ชื่อโปรเจค
    */
    'projectName'?: string;
    /**
    * เลขที่อ้างอิง
    */
    'reference'?: string;
    /**
    * ราคาสินค้ารวมภาษีมูลค่าเพิ่มหรือไม่
    */
    'isVatInclusive'?: boolean;
    'items'?: Array<ExpenseSimpleProductItem>;
    /**
    * ยอดขายรวม
    */
    'subTotal': number;
    /**
    * ส่วนลด (%)
    */
    'discountPercentage'?: number;
    /**
    * ส่วนลดรวม
    */
    'discountAmount'?: number;
    /**
    * ยอดขายหลังหักส่วนลด
    */
    'totalAfterDiscount': number;
    /**
    * ยอดขายหลังหักส่วนลดรวมภาษีมูลค่าเพิ่มหรือไม่
    */
    'isVat'?: boolean;
    /**
    * ภาษีมูลค่าเพิ่ม
    */
    'vatAmount'?: number;
    /**
    * รวมทั้งสิ้น
    */
    'grandTotal': number;
    /**
    * ยอดขายหลังหักส่วนลดหักภาษี ณ ที่จ่ายหรือไม่่
    */
    'isWithholdingTax'?: boolean;
    /**
    * ภาษี ณ ที่จ่าย (%)
    */
    'withholdingTaxAmount'?: number;
    /**
    * หมายเหตุ
    */
    'remarks'?: string;
    /**
    * โน๊ตภายในบริษัท
    */
    'internalNotes'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentSerial",
            "baseName": "documentSerial",
            "type": "string"
        },
        {
            "name": "contactCode",
            "baseName": "contactCode",
            "type": "string"
        },
        {
            "name": "contactName",
            "baseName": "contactName",
            "type": "string"
        },
        {
            "name": "contactAddress",
            "baseName": "contactAddress",
            "type": "string"
        },
        {
            "name": "contactTaxId",
            "baseName": "contactTaxId",
            "type": "string"
        },
        {
            "name": "contactBranch",
            "baseName": "contactBranch",
            "type": "string"
        },
        {
            "name": "contactPerson",
            "baseName": "contactPerson",
            "type": "string"
        },
        {
            "name": "contactEmail",
            "baseName": "contactEmail",
            "type": "string"
        },
        {
            "name": "contactNumber",
            "baseName": "contactNumber",
            "type": "string"
        },
        {
            "name": "contactZipCode",
            "baseName": "contactZipCode",
            "type": "string"
        },
        {
            "name": "publishedOn",
            "baseName": "publishedOn",
            "type": "string"
        },
        {
            "name": "creditType",
            "baseName": "creditType",
            "type": "number"
        },
        {
            "name": "creditDays",
            "baseName": "creditDays",
            "type": "number"
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "string"
        },
        {
            "name": "salesName",
            "baseName": "salesName",
            "type": "string"
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "isVatInclusive",
            "baseName": "isVatInclusive",
            "type": "boolean"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ExpenseSimpleProductItem>"
        },
        {
            "name": "subTotal",
            "baseName": "subTotal",
            "type": "number"
        },
        {
            "name": "discountPercentage",
            "baseName": "discountPercentage",
            "type": "number"
        },
        {
            "name": "discountAmount",
            "baseName": "discountAmount",
            "type": "number"
        },
        {
            "name": "totalAfterDiscount",
            "baseName": "totalAfterDiscount",
            "type": "number"
        },
        {
            "name": "isVat",
            "baseName": "isVat",
            "type": "boolean"
        },
        {
            "name": "vatAmount",
            "baseName": "vatAmount",
            "type": "number"
        },
        {
            "name": "grandTotal",
            "baseName": "grandTotal",
            "type": "number"
        },
        {
            "name": "isWithholdingTax",
            "baseName": "isWithholdingTax",
            "type": "boolean"
        },
        {
            "name": "withholdingTaxAmount",
            "baseName": "withholdingTaxAmount",
            "type": "number"
        },
        {
            "name": "remarks",
            "baseName": "remarks",
            "type": "string"
        },
        {
            "name": "internalNotes",
            "baseName": "internalNotes",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExpenseDocument.attributeTypeMap;
    }
}
