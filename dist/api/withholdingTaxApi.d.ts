/// <reference types="node" />
import http = require('http');
import { AttachmentResponse } from '../model/attachmentResponse';
import { SendEmailResponse } from '../model/sendEmailResponse';
import { SendEmailSimple } from '../model/sendEmailSimple';
import { ShareDocument } from '../model/shareDocument';
import { ShareDocumentResponse } from '../model/shareDocumentResponse';
import { WithholidingTaxDocument } from '../model/withholidingTaxDocument';
import { WithholidingTaxDocumentResponse } from '../model/withholidingTaxDocumentResponse';
import { Authentication } from '../model/models';
import { RequestFile } from './apis';
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
    withholdingTaxesEmailDocumentPost(authorization: string, sendEmailSimple: SendEmailSimple, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SendEmailResponse;
    }>;
    withholdingTaxesGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WithholidingTaxDocumentResponse;
    }>;
    withholdingTaxesIdAttachmentPost(authorization: string, id: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AttachmentResponse;
    }>;
    withholdingTaxesIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WithholidingTaxDocumentResponse;
    }>;
    withholdingTaxesIdStatusKeyStatusIdPost(authorization: string, id: string, statusId: string, options?: {
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
    withholdingTaxesSharedocumentPost(authorization: string, shareDocument: ShareDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ShareDocumentResponse;
    }>;
}
