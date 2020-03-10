"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const document_1 = require("./document");
class SimpleDocument extends document_1.Document {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SimpleDocument.attributeTypeMap);
    }
}
exports.SimpleDocument = SimpleDocument;
SimpleDocument.discriminator = undefined;
SimpleDocument.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<SimpleProductItem>"
    },
    {
        "name": "documentReference",
        "baseName": "documentReference",
        "type": "Array<UpgradeDocument>"
    }
];
//# sourceMappingURL=simpleDocument.js.map