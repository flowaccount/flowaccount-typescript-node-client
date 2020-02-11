/// <reference types="node" />
export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './billingNotesApi';
import { BillingNotesApi } from './billingNotesApi';
export * from './cashInvoiceApi';
import { CashInvoiceApi } from './cashInvoiceApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './expenseApi';
import { ExpenseApi } from './expenseApi';
export * from './productsApi';
import { ProductsApi } from './productsApi';
export * from './quotationsApi';
import { QuotationsApi } from './quotationsApi';
export * from './taxInvoiceApi';
import { TaxInvoiceApi } from './taxInvoiceApi';
export * from './withholdingTaxApi';
import { WithholdingTaxApi } from './withholdingTaxApi';
import * as fs from 'fs';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare const APIS: (typeof AuthenticationApi | typeof BillingNotesApi | typeof CashInvoiceApi | typeof ContactsApi | typeof ExpenseApi | typeof ProductsApi | typeof QuotationsApi | typeof TaxInvoiceApi | typeof WithholdingTaxApi)[];
