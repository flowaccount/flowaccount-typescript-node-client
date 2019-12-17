/// <reference types="node" />
export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './billingNotesApi';
import { BillingNotesApi } from './billingNotesApi';
export * from './cashInvoiceApi';
import { CashInvoiceApi } from './cashInvoiceApi';
export * from './expenseApi';
import { ExpenseApi } from './expenseApi';
export * from './quotationsApi';
import { QuotationsApi } from './quotationsApi';
export * from './reportApi';
import { ReportApi } from './reportApi';
export * from './taxInvoiceApi';
import { TaxInvoiceApi } from './taxInvoiceApi';
import * as fs from 'fs';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.ClientResponse;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.ClientResponse, body: any, statusCode?: number | undefined);
}
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare const APIS: (typeof AuthenticationApi | typeof BillingNotesApi | typeof CashInvoiceApi | typeof ExpenseApi | typeof QuotationsApi | typeof ReportApi | typeof TaxInvoiceApi)[];
