"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var localVarRequest = require("request");
var models_1 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://openapi.flowaccount.com/v1';
var TaxInvoiceApiApiKeys;
(function (TaxInvoiceApiApiKeys) {
})(TaxInvoiceApiApiKeys = exports.TaxInvoiceApiApiKeys || (exports.TaxInvoiceApiApiKeys = {}));
var TaxInvoiceApi = (function () {
    function TaxInvoiceApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(TaxInvoiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaxInvoiceApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    TaxInvoiceApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    TaxInvoiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[TaxInvoiceApiApiKeys[key]].apiKey = value;
    };
    TaxInvoiceApi.prototype.taxInvoicesEmailDocumentPost = function (authorization, sendEmailCoppies, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/tax-Invoices/email-document';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (authorization === null || authorization === undefined) {
                    throw new Error('Required parameter authorization was null or undefined when calling taxInvoicesEmailDocumentPost.');
                }
                if (sendEmailCoppies === null || sendEmailCoppies === undefined) {
                    throw new Error('Required parameter sendEmailCoppies was null or undefined when calling taxInvoicesEmailDocumentPost.');
                }
                localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(sendEmailCoppies, "SendEmailCoppies")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "SendEmailResponse");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    TaxInvoiceApi.prototype.taxInvoicesGet = function (currentPage, pageSize, authorization, sortBy, filter, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/tax-invoices';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (currentPage === null || currentPage === undefined) {
                    throw new Error('Required parameter currentPage was null or undefined when calling taxInvoicesGet.');
                }
                if (pageSize === null || pageSize === undefined) {
                    throw new Error('Required parameter pageSize was null or undefined when calling taxInvoicesGet.');
                }
                if (authorization === null || authorization === undefined) {
                    throw new Error('Required parameter authorization was null or undefined when calling taxInvoicesGet.');
                }
                if (currentPage !== undefined) {
                    localVarQueryParameters['currentPage'] = models_1.ObjectSerializer.serialize(currentPage, "string");
                }
                if (pageSize !== undefined) {
                    localVarQueryParameters['pageSize'] = models_1.ObjectSerializer.serialize(pageSize, "string");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "string");
                }
                if (filter !== undefined) {
                    localVarQueryParameters['filter'] = models_1.ObjectSerializer.serialize(filter, "string");
                }
                localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "SimpleDocumentResponse");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    TaxInvoiceApi.prototype.taxInvoicesIdAttachmentPost = function (authorization, id, file, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/tax-invoices/{id}/attachment'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                localVarFormParams = {};
                if (authorization === null || authorization === undefined) {
                    throw new Error('Required parameter authorization was null or undefined when calling taxInvoicesIdAttachmentPost.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling taxInvoicesIdAttachmentPost.');
                }
                localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                if (file !== undefined) {
                    localVarFormParams['file'] = file;
                }
                localVarUseFormData = true;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    TaxInvoiceApi.prototype.taxInvoicesIdGet = function (authorization, id, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/tax-invoices/{id}'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (authorization === null || authorization === undefined) {
                    throw new Error('Required parameter authorization was null or undefined when calling taxInvoicesIdGet.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling taxInvoicesIdGet.');
                }
                localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "SimpleDocumentResponse");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    TaxInvoiceApi.prototype.taxInvoicesIdInlinePut = function (authorization, id, inlineDocument, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/tax-invoices/{id}/inline'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (authorization === null || authorization === undefined) {
                    throw new Error('Required parameter authorization was null or undefined when calling taxInvoicesIdInlinePut.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling taxInvoicesIdInlinePut.');
                }
                if (inlineDocument === null || inlineDocument === undefined) {
                    throw new Error('Required parameter inlineDocument was null or undefined when calling taxInvoicesIdInlinePut.');
                }
                localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PUT',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(inlineDocument, "InlineDocument")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "InlineDocumentResponse");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    TaxInvoiceApi.prototype.taxInvoicesIdPut = function (authorization, id, simpleDocument, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/tax-invoices/{id}'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (authorization === null || authorization === undefined) {
                    throw new Error('Required parameter authorization was null or undefined when calling taxInvoicesIdPut.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling taxInvoicesIdPut.');
                }
                if (simpleDocument === null || simpleDocument === undefined) {
                    throw new Error('Required parameter simpleDocument was null or undefined when calling taxInvoicesIdPut.');
                }
                localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PUT',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(simpleDocument, "SimpleDocument")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "SimpleDocumentResponse");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    TaxInvoiceApi.prototype.taxInvoicesInlinePost = function (authorization, inlineDocument, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/tax-invoices/inline';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (authorization === null || authorization === undefined) {
                    throw new Error('Required parameter authorization was null or undefined when calling taxInvoicesInlinePost.');
                }
                if (inlineDocument === null || inlineDocument === undefined) {
                    throw new Error('Required parameter inlineDocument was null or undefined when calling taxInvoicesInlinePost.');
                }
                localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(inlineDocument, "InlineDocument")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "InlineDocumentResponse");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    TaxInvoiceApi.prototype.taxInvoicesPost = function (authorization, simpleDocument, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/tax-invoices';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (authorization === null || authorization === undefined) {
                    throw new Error('Required parameter authorization was null or undefined when calling taxInvoicesPost.');
                }
                if (simpleDocument === null || simpleDocument === undefined) {
                    throw new Error('Required parameter simpleDocument was null or undefined when calling taxInvoicesPost.');
                }
                localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(simpleDocument, "SimpleDocument")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "SimpleDocumentResponse");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    return TaxInvoiceApi;
}());
exports.TaxInvoiceApi = TaxInvoiceApi;
//# sourceMappingURL=taxInvoiceApi.js.map