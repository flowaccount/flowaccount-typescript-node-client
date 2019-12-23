"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatusResponse {
    static getAttributeTypeMap() {
        return StatusResponse.attributeTypeMap;
    }
}
StatusResponse.discriminator = undefined;
StatusResponse.attributeTypeMap = [
    {
        "name": "recordId",
        "baseName": "recordId",
        "type": "number"
    },
    {
        "name": "referencedToMe",
        "baseName": "referencedToMe",
        "type": "Array<ReferencedToMe>"
    },
    {
        "name": "referencedByMe",
        "baseName": "referencedByMe",
        "type": "Array<ReferencedByMe>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "number"
    },
    {
        "name": "statusString",
        "baseName": "statusString",
        "type": "number"
    },
    {
        "name": "documentType",
        "baseName": "documentType",
        "type": "number"
    },
    {
        "name": "allowDelete",
        "baseName": "allowDelete",
        "type": "boolean"
    }
];
exports.StatusResponse = StatusResponse;
//# sourceMappingURL=statusResponse.js.map