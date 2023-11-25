import { Model } from "mongoose";


export type TUserFullName =  {
    firstName: string;
    lastName:string
}

export type TUserAddress = {
    street: string;
    city: string;
    country: string
}

export type TUserOders = {
    productName:string;
    price: number;
    quantity:number
}[]

export type TUser = {
    userId : number;
    userName: string;
    password: string;
    fullName:TUserFullName;
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string[];
    address:TUserAddress;
    orders: TUserOders
}

export interface TUserModel extends Model<TUser> {
    isUserExists(_id: string): Promise<TUser | null>;
  }

