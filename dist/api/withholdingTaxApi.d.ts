/// <reference types="node" />
import http = require('http');
import { WithholidingTaxDocument } from '../model/withholidingTaxDocument';
import { WithholidingTaxDocumentResponse } from '../model/withholidingTaxDocumentResponse';
import { Authentication } from '../model/models';
export declare enum WithholdingTaxApiApiKeys {
}
export declare class WithholdingTaxApi {
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
    setApiKey(key: WithholdingTaxApiApiKeys, value: string): void;
    withholdingTaxesGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WithholidingTaxDocumentResponse;
    }>;
    withholdingTaxesIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WithholidingTaxDocumentResponse;
    }>;
    withholdingTaxesPost(authorization: string, withholidingTaxDocument: WithholidingTaxDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WithholidingTaxDocumentResponse;
    }>;
}
