

export type UserFullName =  {
    firstName: string;
    lastNmae:string
}

export type UserAddress = {
    street: string;
    city: string;
    country: string
}

export type UserOders = {
    productNmae:string;
    price: number;
    quantity:number
}[]

export type User = {
    userId : number;
    userName: string;
    password: string;
    fullName:UserFullName;
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string[];
    address:UserAddress;
    orders: UserOders
}