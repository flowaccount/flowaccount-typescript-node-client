export * from './authenResponse';
export * from './businessCategory';
export * from './document';
export * from './documentResponse';
export * from './expenseDocument';
export * from './expenseDocumentResponse';
export * from './expenseInlineDocument';
export * from './expenseInlineProductItem';
export * from './expenseSimpleProductItem';
export * from './expensenlineDocumentResponse';
export * from './inlineDocument';
export * from './inlineDocumentAllOf';
export * from './inlineDocumentResponse';
export * from './inlineDocumentResponseAllOf';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineObject2';
export * from './inlineObject3';
export * from './inlineObject4';
export * from './inlineProductItem';
export * from './inlineProductItemAllOf';
export * from './productItem';
export * from './sendEmail';
export * from './sendEmailCoppies';
export * from './sendEmailCoppiesAllOf';
export * from './sendEmailResponse';
export * from './sendEmailSimple';
export * from './simpleDocument';
export * from './simpleDocumentAllOf';
export * from './simpleDocumentResponse';
export * from './simpleDocumentResponseAllOf';
export * from './simpleProductItem';

import localVarRequest = require('request');

import { AuthenResponse } from './authenResponse';
import { BusinessCategory } from './businessCategory';
import { Document } from './document';
import { DocumentResponse } from './documentResponse';
import { ExpenseDocument } from './expenseDocument';
import { ExpenseDocumentResponse } from './expenseDocumentResponse';
import { ExpenseInlineDocument } from './expenseInlineDocument';
import { ExpenseInlineProductItem } from './expenseInlineProductItem';
import { ExpenseSimpleProductItem } from './expenseSimpleProductItem';
import { ExpensenlineDocumentResponse } from './expensenlineDocumentResponse';
import { InlineDocument } from './inlineDocument';
import { InlineDocumentAllOf } from './inlineDocumentAllOf';
import { InlineDocumentResponse } from './inlineDocumentResponse';
import { InlineDocumentResponseAllOf } from './inlineDocumentResponseAllOf';
import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineObject2 } from './inlineObject2';
import { InlineObject3 } from './inlineObject3';
import { InlineObject4 } from './inlineObject4';
import { InlineProductItem } from './inlineProductItem';
import { InlineProductItemAllOf } from './inlineProductItemAllOf';
import { ProductItem } from './productItem';
import { SendEmail } from './sendEmail';
import { SendEmailCoppies } from './sendEmailCoppies';
import { SendEmailCoppiesAllOf } from './sendEmailCoppiesAllOf';
import { SendEmailResponse } from './sendEmailResponse';
import { SendEmailSimple } from './sendEmailSimple';
import { SimpleDocument } from './simpleDocument';
import { SimpleDocumentAllOf } from './simpleDocumentAllOf';
import { SimpleDocumentResponse } from './simpleDocumentResponse';
import { SimpleDocumentResponseAllOf } from './simpleDocumentResponseAllOf';
import { SimpleProductItem } from './simpleProductItem';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "AuthenResponse": AuthenResponse,
    "BusinessCategory": BusinessCategory,
    "Document": Document,
    "DocumentResponse": DocumentResponse,
    "ExpenseDocument": ExpenseDocument,
    "ExpenseDocumentResponse": ExpenseDocumentResponse,
    "ExpenseInlineDocument": ExpenseInlineDocument,
    "ExpenseInlineProductItem": ExpenseInlineProductItem,
    "ExpenseSimpleProductItem": ExpenseSimpleProductItem,
    "ExpensenlineDocumentResponse": ExpensenlineDocumentResponse,
    "InlineDocument": InlineDocument,
    "InlineDocumentAllOf": InlineDocumentAllOf,
    "InlineDocumentResponse": InlineDocumentResponse,
    "InlineDocumentResponseAllOf": InlineDocumentResponseAllOf,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineObject2": InlineObject2,
    "InlineObject3": InlineObject3,
    "InlineObject4": InlineObject4,
    "InlineProductItem": InlineProductItem,
    "InlineProductItemAllOf": InlineProductItemAllOf,
    "ProductItem": ProductItem,
    "SendEmail": SendEmail,
    "SendEmailCoppies": SendEmailCoppies,
    "SendEmailCoppiesAllOf": SendEmailCoppiesAllOf,
    "SendEmailResponse": SendEmailResponse,
    "SendEmailSimple": SendEmailSimple,
    "SimpleDocument": SimpleDocument,
    "SimpleDocumentAllOf": SimpleDocumentAllOf,
    "SimpleDocumentResponse": SimpleDocumentResponse,
    "SimpleDocumentResponseAllOf": SimpleDocumentResponseAllOf,
    "SimpleProductItem": SimpleProductItem,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}