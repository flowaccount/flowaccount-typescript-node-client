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

import { DocumentResponse } from './documentResponse';
import { InlineDocument } from './inlineDocument';
import { InlineDocumentResponseAllOf } from './inlineDocumentResponseAllOf';

export class InlineDocumentResponse extends DocumentResponse {
    'data'?: InlineDocument;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "InlineDocument"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InlineDocumentResponse.attributeTypeMap);
    }
}

