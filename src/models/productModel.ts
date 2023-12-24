export interface IProduct {
    id:number,
    title:string,
    description:string,
    price:IPrice[],
}
interface IPrice{
    count:string,
    price:string,
}