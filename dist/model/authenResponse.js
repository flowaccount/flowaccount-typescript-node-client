"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthenResponse {
    static getAttributeTypeMap() {
        return AuthenResponse.attributeTypeMap;
    }
}
exports.AuthenResponse = AuthenResponse;
AuthenResponse.discriminator = undefined;
AuthenResponse.attributeTypeMap = [
    {
        "name": "accessToken",
        "baseName": "access_token",
        "type": "string"
    },
    {
        "name": "expiresIn",
        "baseName": "expires_in",
        "type": "number"
    },
    {
        "name": "tokenType",
        "baseName": "token_type",
        "type": "string"
    },
    {
        "name": "refreshToken",
        "baseName": "refresh_token",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "string"
    }
];
//# sourceMappingURL=authenResponse.js.map