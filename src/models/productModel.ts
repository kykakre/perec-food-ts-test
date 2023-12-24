export interface IProduct {
    id:number,
    title:string,
    description:string,
    priceCount:IPrice[],
}
interface IPrice{
    count:string,
    price:string,
}