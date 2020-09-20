class employee {
    id:number;
    name:string;
}

class inventory {
    name:string;
    type:string;
    cost:number;
}

export class pendingRequests {
    emp:employee;
    inventories:inventory[];
    devRemarks:string;
    totalItems:number;
    totalCost:number;
    id:number;
}