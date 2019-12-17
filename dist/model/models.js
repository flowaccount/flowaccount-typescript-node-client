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
__export(require("./sendEmail"));
__export(require("./sendEmailCoppies"));
__export(require("./sendEmailCoppiesAllOf"));
__export(require("./sendEmailResponse"));
__export(require("./sendEmailSimple"));
__export(require("./simpleDocument"));
__export(require("./simpleDocumentAllOf"));
__export(require("./simpleDocumentResponse"));
__export(require("./simpleDocumentResponseAllOf"));
__export(require("./simpleProductItem"));
var authenResponse_1 = require("./authenResponse");
var businessCategory_1 = require("./businessCategory");
var document_1 = require("./document");
var documentResponse_1 = require("./documentResponse");
var expenseDocument_1 = require("./expenseDocument");
var expenseDocumentResponse_1 = require("./expenseDocumentResponse");
var expenseInlineDocument_1 = require("./expenseInlineDocument");
var expenseInlineProductItem_1 = require("./expenseInlineProductItem");
var expenseSimpleProductItem_1 = require("./expenseSimpleProductItem");
var expensenlineDocumentResponse_1 = require("./expensenlineDocumentResponse");
var inlineDocument_1 = require("./inlineDocument");
var inlineDocumentAllOf_1 = require("./inlineDocumentAllOf");
var inlineDocumentResponse_1 = require("./inlineDocumentResponse");
var inlineDocumentResponseAllOf_1 = require("./inlineDocumentResponseAllOf");
var inlineObject_1 = require("./inlineObject");
var inlineObject1_1 = require("./inlineObject1");
var inlineObject2_1 = require("./inlineObject2");
var inlineObject3_1 = require("./inlineObject3");
var inlineObject4_1 = require("./inlineObject4");
var inlineProductItem_1 = require("./inlineProductItem");
var inlineProductItemAllOf_1 = require("./inlineProductItemAllOf");
var productItem_1 = require("./productItem");
var sendEmail_1 = require("./sendEmail");
var sendEmailCoppies_1 = require("./sendEmailCoppies");
var sendEmailCoppiesAllOf_1 = require("./sendEmailCoppiesAllOf");
var sendEmailResponse_1 = require("./sendEmailResponse");
var sendEmailSimple_1 = require("./sendEmailSimple");
var simpleDocument_1 = require("./simpleDocument");
var simpleDocumentAllOf_1 = require("./simpleDocumentAllOf");
var simpleDocumentResponse_1 = require("./simpleDocumentResponse");
var simpleDocumentResponseAllOf_1 = require("./simpleDocumentResponseAllOf");
var simpleProductItem_1 = require("./simpleProductItem");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {};
var typeMap = {
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
    "SendEmail": sendEmail_1.SendEmail,
    "SendEmailCoppies": sendEmailCoppies_1.SendEmailCoppies,
    "SendEmailCoppiesAllOf": sendEmailCoppiesAllOf_1.SendEmailCoppiesAllOf,
    "SendEmailResponse": sendEmailResponse_1.SendEmailResponse,
    "SendEmailSimple": sendEmailSimple_1.SendEmailSimple,
    "SimpleDocument": simpleDocument_1.SimpleDocument,
    "SimpleDocumentAllOf": simpleDocumentAllOf_1.SimpleDocumentAllOf,
    "SimpleDocumentResponse": simpleDocumentResponse_1.SimpleDocumentResponse,
    "SimpleDocumentResponseAllOf": simpleDocumentResponseAllOf_1.SimpleDocumentResponseAllOf,
    "SimpleProductItem": simpleProductItem_1.SimpleProductItem,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
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
            var discriminatorProperty = typeMap[expectedType].discriminator;
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
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
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
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
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
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
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
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map