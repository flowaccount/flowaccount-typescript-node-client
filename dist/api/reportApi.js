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
var ReportApiApiKeys;
(function (ReportApiApiKeys) {
})(ReportApiApiKeys = exports.ReportApiApiKeys || (exports.ReportApiApiKeys = {}));
class ReportApi {
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
        this.authentications[ReportApiApiKeys[key]].apiKey = value;
    }
    reportCultureSalePost(culture, authorization, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/report/{culture}/sale'
                .replace('{' + 'culture' + '}', encodeURIComponent(String(culture)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            const produces = ['application/vnd.ms-excel'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (culture === null || culture === undefined) {
                throw new Error('Required parameter culture was null or undefined when calling reportCultureSalePost.');
            }
            if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling reportCultureSalePost.');
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
                encoding: null,
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
                            body = models_1.ObjectSerializer.deserialize(body, "Buffer");
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
exports.ReportApi = ReportApi;
//# sourceMappingURL=reportApi.js.map