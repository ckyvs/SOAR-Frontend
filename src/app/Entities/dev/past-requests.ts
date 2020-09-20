class inventory {
    name:string;
    type:string;
}

export class pastRequests{
    id:number;
    status:string;
    inventories:inventory[];
    devRemarks:string;
    managerRemarks:string;
    createdDate:Date;
    responseDate:Date;
}