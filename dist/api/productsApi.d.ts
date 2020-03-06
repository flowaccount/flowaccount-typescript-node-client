/// <reference types="node" />
import http = require('http');
import { Product } from '../model/product';
import { ProductResponse } from '../model/productResponse';
import { Authentication } from '../model/models';
export declare enum ProductsApiApiKeys {
}
export declare class ProductsApi {
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
    setApiKey(key: ProductsApiApiKeys, value: string): void;
    productsGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProductResponse;
    }>;
    productsIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProductResponse;
    }>;
    productsIdPut(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProductResponse;
    }>;
    productsPost(authorization: string, product: Product, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProductResponse;
    }>;
}