/// <reference types="node" />
import http = require('http');
import { BusinessCategory } from '../model/businessCategory';
import { ExpenseDocument } from '../model/expenseDocument';
import { ExpenseDocumentResponse } from '../model/expenseDocumentResponse';
import { ExpenseInlineDocument } from '../model/expenseInlineDocument';
import { ExpensenlineDocumentResponse } from '../model/expensenlineDocumentResponse';
import { Authentication } from '../model/models';
import { RequestFile } from './apis';
export declare enum ExpenseApiApiKeys {
}
export declare class ExpenseApi {
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
    setApiKey(key: ExpenseApiApiKeys, value: string): void;
    expensesCategoriesAccountingGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BusinessCategory;
    }>;
    expensesCategoriesBusinessGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BusinessCategory;
    }>;
    expensesGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseDocumentResponse;
    }>;
    expensesIdAttachmentPost(authorization: string, id: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    expensesIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseDocumentResponse;
    }>;
    expensesIdInlineGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseInlineDocument;
    }>;
    expensesInlinePost(authorization: string, expenseInlineDocument: ExpenseInlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpensenlineDocumentResponse;
    }>;
    expensesPost(authorization: string, expenseDocument: ExpenseDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseDocumentResponse;
    }>;
}
