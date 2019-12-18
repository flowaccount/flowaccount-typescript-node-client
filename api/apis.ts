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

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AuthenticationApi, BillingNotesApi, CashInvoiceApi, ExpenseApi, QuotationsApi, ReportApi, TaxInvoiceApi];
