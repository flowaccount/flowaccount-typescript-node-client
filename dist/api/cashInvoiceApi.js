"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const localVarRequest = require("request");
const models_1 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://openapi.flowaccount.com/v1';
var CashInvoiceApiApiKeys;
(function (CashInvoiceApiApiKeys) {
})(CashInvoiceApiApiKeys = exports.CashInvoiceApiApiKeys || (exports.CashInvoiceApiApiKeys = {}));
class CashInvoiceApi {
    constructor(basePathOrUsername, password, basePath) {
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
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[CashInvoiceApiApiKeys[key]].apiKey = value;
    }
    cashInvoicesGet(currentPage, pageSize, authorization, sortBy, filter, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/cash-invoices';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (currentPage === null || currentPage === undefined) {
                throw new Error('Required parameter currentPage was null or undefined when calling cashInvoicesGet.');
            }
            if (pageSize === null || pageSize === undefined) {
                throw new Error('Required parameter pageSize was null or undefined when calling cashInvoicesGet.');
            }
            if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling cashInvoicesGet.');
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
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            return authenticationPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
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
            });
        });
    }
    cashInvoicesIdDelete(authorization, id, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/cash-invoices/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling cashInvoicesIdDelete.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling cashInvoicesIdDelete.');
            }
            localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'DELETE',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            return authenticationPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            body = models_1.ObjectSerializer.deserialize(body, "object");
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    cashInvoicesIdGet(authorization, id, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/cash-invoices/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling cashInvoicesIdGet.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling cashInvoicesIdGet.');
            }
            localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            return authenticationPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
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
            });
        });
    }
    cashInvoicesIdPut(authorization, id, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/cash-invoices/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling cashInvoicesIdPut.');
            }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling cashInvoicesIdPut.');
            }
            localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            return authenticationPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
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
            });
        });
    }
    cashInvoicesPost(authorization, simpleDocument, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/cash-invoices';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling cashInvoicesPost.');
            }
            if (simpleDocument === null || simpleDocument === undefined) {
                throw new Error('Required parameter simpleDocument was null or undefined when calling cashInvoicesPost.');
            }
            localVarHeaderParams['Authorization'] = models_1.ObjectSerializer.serialize(authorization, "string");
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(simpleDocument, "SimpleDocument")
            };
            let authenticationPromise = Promise.resolve();
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            return authenticationPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    localVarRequest(localVarRequestOptions, (error, response, body) => {
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
            });
        });
    }
}
exports.CashInvoiceApi = CashInvoiceApi;
//# sourceMappingURL=cashInvoiceApi.js.map