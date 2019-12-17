/// <reference types="node" />
import http = require('http');
import { Authentication } from '../model/models';
export declare enum ReportApiApiKeys {
}
export declare class ReportApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ReportApiApiKeys, value: string): void;
    reportCultureSalePost(culture: string, authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Buffer;
    }>;
}
