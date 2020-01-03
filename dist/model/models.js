"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./authenResponse"));
__export(require("./businessCategory"));
__export(require("./document"));
__export(require("./documentResponse"));
__export(require("./expenseDocument"));
__export(require("./expenseDocumentResponse"));
__export(require("./expenseInlineDocument"));
__export(require("./expenseInlineProductItem"));
__export(require("./expenseSimpleProductItem"));
__export(require("./expensenlineDocumentResponse"));
__export(require("./inlineDocument"));
__export(require("./inlineDocumentAllOf"));
__export(require("./inlineDocumentResponse"));
__export(require("./inlineDocumentResponseAllOf"));
__export(require("./inlineObject"));
__export(require("./inlineObject1"));
__export(require("./inlineObject2"));
__export(require("./inlineObject3"));
__export(require("./inlineObject4"));
__export(require("./inlineProductItem"));
__export(require("./inlineProductItemAllOf"));
__export(require("./productItem"));
__export(require("./referencedByMe"));
__export(require("./referencedToMe"));
__export(require("./sendEmail"));
__export(require("./sendEmailCoppies"));
__export(require("./sendEmailCoppiesAllOf"));
__export(require("./sendEmailResponse"));
__export(require("./sendEmailSimple"));
__export(require("./shareDocument"));
__export(require("./shareDocumentResponse"));
__export(require("./simpleDocument"));
__export(require("./simpleDocumentAllOf"));
__export(require("./simpleDocumentResponse"));
__export(require("./simpleDocumentResponseAllOf"));
__export(require("./simpleProductItem"));
__export(require("./statusResponse"));
__export(require("./upgradeDocument"));
const authenResponse_1 = require("./authenResponse");
const businessCategory_1 = require("./businessCategory");
const document_1 = require("./document");
const documentResponse_1 = require("./documentResponse");
const expenseDocument_1 = require("./expenseDocument");
const expenseDocumentResponse_1 = require("./expenseDocumentResponse");
const expenseInlineDocument_1 = require("./expenseInlineDocument");
const expenseInlineProductItem_1 = require("./expenseInlineProductItem");
const expenseSimpleProductItem_1 = require("./expenseSimpleProductItem");
const expensenlineDocumentResponse_1 = require("./expensenlineDocumentResponse");
const inlineDocument_1 = require("./inlineDocument");
const inlineDocumentAllOf_1 = require("./inlineDocumentAllOf");
const inlineDocumentResponse_1 = require("./inlineDocumentResponse");
const inlineDocumentResponseAllOf_1 = require("./inlineDocumentResponseAllOf");
const inlineObject_1 = require("./inlineObject");
const inlineObject1_1 = require("./inlineObject1");
const inlineObject2_1 = require("./inlineObject2");
const inlineObject3_1 = require("./inlineObject3");
const inlineObject4_1 = require("./inlineObject4");
const inlineProductItem_1 = require("./inlineProductItem");
const inlineProductItemAllOf_1 = require("./inlineProductItemAllOf");
const productItem_1 = require("./productItem");
const referencedByMe_1 = require("./referencedByMe");
const referencedToMe_1 = require("./referencedToMe");
const sendEmail_1 = require("./sendEmail");
const sendEmailCoppies_1 = require("./sendEmailCoppies");
const sendEmailCoppiesAllOf_1 = require("./sendEmailCoppiesAllOf");
const sendEmailResponse_1 = require("./sendEmailResponse");
const sendEmailSimple_1 = require("./sendEmailSimple");
const shareDocument_1 = require("./shareDocument");
const shareDocumentResponse_1 = require("./shareDocumentResponse");
const simpleDocument_1 = require("./simpleDocument");
const simpleDocumentAllOf_1 = require("./simpleDocumentAllOf");
const simpleDocumentResponse_1 = require("./simpleDocumentResponse");
const simpleDocumentResponseAllOf_1 = require("./simpleDocumentResponseAllOf");
const simpleProductItem_1 = require("./simpleProductItem");
const statusResponse_1 = require("./statusResponse");
const upgradeDocument_1 = require("./upgradeDocument");
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
let enumsMap = {};
let typeMap = {
    "AuthenResponse": authenResponse_1.AuthenResponse,
    "BusinessCategory": businessCategory_1.BusinessCategory,
    "Document": document_1.Document,
    "DocumentResponse": documentResponse_1.DocumentResponse,
    "ExpenseDocument": expenseDocument_1.ExpenseDocument,
    "ExpenseDocumentResponse": expenseDocumentResponse_1.ExpenseDocumentResponse,
    "ExpenseInlineDocument": expenseInlineDocument_1.ExpenseInlineDocument,
    "ExpenseInlineProductItem": expenseInlineProductItem_1.ExpenseInlineProductItem,
    "ExpenseSimpleProductItem": expenseSimpleProductItem_1.ExpenseSimpleProductItem,
    "ExpensenlineDocumentResponse": expensenlineDocumentResponse_1.ExpensenlineDocumentResponse,
    "InlineDocument": inlineDocument_1.InlineDocument,
    "InlineDocumentAllOf": inlineDocumentAllOf_1.InlineDocumentAllOf,
    "InlineDocumentResponse": inlineDocumentResponse_1.InlineDocumentResponse,
    "InlineDocumentResponseAllOf": inlineDocumentResponseAllOf_1.InlineDocumentResponseAllOf,
    "InlineObject": inlineObject_1.InlineObject,
    "InlineObject1": inlineObject1_1.InlineObject1,
    "InlineObject2": inlineObject2_1.InlineObject2,
    "InlineObject3": inlineObject3_1.InlineObject3,
    "InlineObject4": inlineObject4_1.InlineObject4,
    "InlineProductItem": inlineProductItem_1.InlineProductItem,
    "InlineProductItemAllOf": inlineProductItemAllOf_1.InlineProductItemAllOf,
    "ProductItem": productItem_1.ProductItem,
    "ReferencedByMe": referencedByMe_1.ReferencedByMe,
    "ReferencedToMe": referencedToMe_1.ReferencedToMe,
    "SendEmail": sendEmail_1.SendEmail,
    "SendEmailCoppies": sendEmailCoppies_1.SendEmailCoppies,
    "SendEmailCoppiesAllOf": sendEmailCoppiesAllOf_1.SendEmailCoppiesAllOf,
    "SendEmailResponse": sendEmailResponse_1.SendEmailResponse,
    "SendEmailSimple": sendEmailSimple_1.SendEmailSimple,
    "ShareDocument": shareDocument_1.ShareDocument,
    "ShareDocumentResponse": shareDocumentResponse_1.ShareDocumentResponse,
    "SimpleDocument": simpleDocument_1.SimpleDocument,
    "SimpleDocumentAllOf": simpleDocumentAllOf_1.SimpleDocumentAllOf,
    "SimpleDocumentResponse": simpleDocumentResponse_1.SimpleDocumentResponse,
    "SimpleDocumentResponseAllOf": simpleDocumentResponseAllOf_1.SimpleDocumentResponseAllOf,
    "SimpleProductItem": simpleProductItem_1.SimpleProductItem,
    "StatusResponse": statusResponse_1.StatusResponse,
    "UpgradeDocument": upgradeDocument_1.UpgradeDocument,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
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
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map