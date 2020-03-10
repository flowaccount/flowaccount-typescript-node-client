"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEmail_1 = require("./sendEmail");
class SendEmailCoppies extends sendEmail_1.SendEmail {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SendEmailCoppies.attributeTypeMap);
    }
}
exports.SendEmailCoppies = SendEmailCoppies;
SendEmailCoppies.discriminator = undefined;
SendEmailCoppies.attributeTypeMap = [
    {
        "name": "doCopy",
        "baseName": "doCopy",
        "type": "boolean"
    }
];
//# sourceMappingURL=sendEmailCoppies.js.map