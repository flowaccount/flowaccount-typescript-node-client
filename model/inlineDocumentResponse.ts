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

import { DocumentResponse } from './documentResponse';
import { InlineDocumentResponseAllOf } from './inlineDocumentResponseAllOf';
import { InlineDocumentResponseAllOfData } from './inlineDocumentResponseAllOfData';

export class InlineDocumentResponse extends DocumentResponse {
    'data'?: InlineDocumentResponseAllOfData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "InlineDocumentResponseAllOfData"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InlineDocumentResponse.attributeTypeMap);
    }
}

