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


export class InlineObject1 {
    'grantType'?: string;
    'scope'?: string;
    'clientId'?: string;
    'clientSecret'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "grantType",
            "baseName": "grant_type",
            "type": "string"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        },
        {
            "name": "clientId",
            "baseName": "client_id",
            "type": "string"
        },
        {
            "name": "clientSecret",
            "baseName": "client_secret",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject1.attributeTypeMap;
    }
}

