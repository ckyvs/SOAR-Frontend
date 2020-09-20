class type {
    id:number;
    type:string;
}

class inventory {
    name:string;
    itemsInStock:number;
    isAvailable?:string;
    type:type;
    inCart?:boolean;
    sameTypeInCart?:boolean;
}

export class cart_backend {
    inventories?:inventory[];
    remarks:string;
}