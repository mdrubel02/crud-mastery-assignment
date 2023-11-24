

export type UserFullName =  {
    firstName: string;
    lastName:string
}

export type UserAddress = {
    street: string;
    city: string;
    country: string
}

export type UserOders = {
    productName:string;
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