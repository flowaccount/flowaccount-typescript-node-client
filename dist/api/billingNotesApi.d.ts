/// <reference types="node" />
import http = require('http');
import { InlineDocument } from '../model/inlineDocument';
import { InlineDocumentResponse } from '../model/inlineDocumentResponse';
import { SendEmailCoppies } from '../model/sendEmailCoppies';
import { SendEmailResponse } from '../model/sendEmailResponse';
import { SimpleDocument } from '../model/simpleDocument';
import { SimpleDocumentResponse } from '../model/simpleDocumentResponse';
import { Authentication } from '../model/models';
import { RequestFile } from './apis';
export declare enum BillingNotesApiApiKeys {
}
export declare class BillingNotesApi {
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
    setApiKey(key: BillingNotesApiApiKeys, value: string): void;
    billingNotesEmailDocumentPost(authorization: string, sendEmailCoppies: SendEmailCoppies, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: SendEmailResponse;
    }>;
    billingNotesGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: SimpleDocumentResponse;
    }>;
    billingNotesIdAttachmentPost(authorization: string, id: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    billingNotesIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineDocumentResponse;
    }>;
    billingNotesInlinePost(authorization: string, inlineDocument: InlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: InlineDocumentResponse;
    }>;
    billingNotesPost(authorization: string, simpleDocument: SimpleDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: SimpleDocumentResponse;
    }>;
}
