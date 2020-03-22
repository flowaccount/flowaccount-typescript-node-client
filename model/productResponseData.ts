/**
 * FlowAccount Open API
 * FlowAccount.com โปรแกรมบัญชีออนไลน์ใช้งานง่าย สำหรับธุรกิจที่พึ่งเริ่มต้น   # Introduction **Servers Production**    site: https://www.flowaccount.com    api url: https://openapi.flowaccount.com/v1    **Beta test**   site: http://sandbox-new.flowaccount.com/    api url: https://openapi.flowaccount.com/test
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ProductResponseData {
    /**
    * เลข id Product
    */
    'id'?: string;
    /**
    * ประเภทสินค้า: 1 = บริการ / 3 = ไม่นับสต๊อก / 5 = นับสต๊อก
    */
    'type'?: number;
    /**
    * รหัสสินค้า <br> <ex>Example: P001</ex>
    */
    'code'?: string;
    /**
    * ชื่อสินค้า <br> <ex>Example: Product</ex>
    */
    'name'?: string;
    /**
    * รายละเอียดสินค้า ฝั่งขาย
    */
    'sellDescription'?: string;
    /**
    * ราคาขายสินค้า
    */
    'sellPrice'?: number;
    /**
    * ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี
    */
    'sellVatType'?: number;
    /**
    * หน่วยสินค้า
    */
    'unitName'?: string;
    /**
    * หมวดสินค้า
    */
    'categoryName'?: string;
    /**
    * บาร์โค้ด
    */
    'barcode'?: string;
    /**
    * รายละเอียดสินค้า ฝั่งซื้อ
    */
    'buyDescription'?: string;
    /**
    * ราคาซื้อสินค้า
    */
    'buyPrice'?: number;
    /**
    * ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี
    */
    'buyVatType'?: number;
    /**
    * วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    */
    'inventoryPublishedOn'?: string;
    /**
    * จำนวนยอดตั้งต้นสินค้า
    */
    'inventoryQuantity'?: number;
    /**
    * ราคาซื้อเฉลี่ยสินค้า
    */
    'averageBuyPrice'?: number;
    /**
    * ราคาขายเฉลี่ยสินค้า
    */
    'averageSellPrice'?: number;
    /**
    * จำนวนสินค้าคงเหลือในสต๊อก
    */
    'remainingStock'?: number;
    /**
    * มูลค่าสินค้าคงเหลือในสต๊อก
    */
    'totalValueInHand'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "sellDescription",
            "baseName": "sellDescription",
            "type": "string"
        },
        {
            "name": "sellPrice",
            "baseName": "sellPrice",
            "type": "number"
        },
        {
            "name": "sellVatType",
            "baseName": "sellVatType",
            "type": "number"
        },
        {
            "name": "unitName",
            "baseName": "unitName",
            "type": "string"
        },
        {
            "name": "categoryName",
            "baseName": "categoryName",
            "type": "string"
        },
        {
            "name": "barcode",
            "baseName": "barcode",
            "type": "string"
        },
        {
            "name": "buyDescription",
            "baseName": "buyDescription",
            "type": "string"
        },
        {
            "name": "buyPrice",
            "baseName": "buyPrice",
            "type": "number"
        },
        {
            "name": "buyVatType",
            "baseName": "buyVatType",
            "type": "number"
        },
        {
            "name": "inventoryPublishedOn",
            "baseName": "inventoryPublishedOn",
            "type": "string"
        },
        {
            "name": "inventoryQuantity",
            "baseName": "inventoryQuantity",
            "type": "number"
        },
        {
            "name": "averageBuyPrice",
            "baseName": "averageBuyPrice",
            "type": "number"
        },
        {
            "name": "averageSellPrice",
            "baseName": "averageSellPrice",
            "type": "number"
        },
        {
            "name": "remainingStock",
            "baseName": "remainingStock",
            "type": "number"
        },
        {
            "name": "totalValueInHand",
            "baseName": "totalValueInHand",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ProductResponseData.attributeTypeMap;
    }
}

