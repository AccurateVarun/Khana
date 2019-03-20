export class Categories {
    name: string;
    img: string;
    open: boolean;
    products: Product[];
}

export class MenuGlobal {
    categories: Categories[];
}

export class Order {
    date: Date;
    total: number;
    products: Product[];
}

export class Product {
    img: string;
    desc: string;
    name: string;
    price: number;
    quantity: number;
}

export class MenuCategories {
    ID: number;
    IMAGE : string;
    NAME: string;
    BEVERAGE: number;
    TYPE: string;
    SHOP: string;
    BON: number;
    ZUTATEN: number;
    TIMESLOTONE: string;
    DISCOUNTRATE: number;
    DISCOUNT: number;
    DISCOUNTYPE: string
}

export class MenuItems {
    ID : number; 
    NAME : string; 
    BUY_PRICE : number; 
    PRICE : number; 
    DISCOUNT_RATE : number; 
    VISIBLE : number; 
    IMAGE : string; 
    SHOW_IMAGE_ONLY : number; 
    GROUP_ID : number; 
    TAX_ID : number; 
    RECEPIE : string; 
    BARCODE : string; 
    VPRINTER_ID : string; 
    ITEMID : string; 
    DESCRIPTION : string; 
    NOTE : string; 
    HIDEDISPLAYNAME : number; 
    CHANGEPRICE : number; 
    DISCOUNT : number; 
    DISCOUNTTYPE : string; 
    ANOTHERDISCOUNT : number; 
    QUICKITEM : number; 
    WEIGHT : number; 
    MAXIMUMEXTRAS : number; 
    RED : number; 
    GREEN : number; 
    BLUE : number; 
    SUBITEMID : string; 
    PFAND : number; 
    ALTERNATE_MODIFIER : number; 
    BEVERAGE : string; 
    EXTRAKAT1 : number; 
    EXTRAKAT2 : number; 
    ITEMSCID : string;
}

export class MenuGroup {
    ID :number; 
    NAME : string; 
    CATEGORY_ID : number; 
    IMAGE : string;
    DESCRIPTION : string; 
    NOTE : string; 
    PRICE : number; 
    GAENG : number
    ITEMS : [MenuItems];



}

