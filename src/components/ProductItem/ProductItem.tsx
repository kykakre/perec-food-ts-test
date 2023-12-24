import React, {FC} from 'react';
import style from "./ProductItem.module.scss"
import {IProduct} from "../../models/productModel";

interface PropsProductItem{
    product : IProduct;
    remove:(product:IProduct) => void;
    update:(product:IProduct) => void
}
const ProductItem: FC<PropsProductItem> = ({product, remove, update}) => {

    const handleDelete = (e:React.MouseEvent) =>{
        e.stopPropagation();
        remove(product)
    }
    const handleUpdate = (e:React.MouseEvent) =>{
        const title = prompt("Измени название продукта") || ""
        update({...product, title})
    }
    return (
        <div className={style.card}>


            <div className={style.text}>
                <div className={style.title} onClick={handleUpdate}>{product.title}</div>
                {product.description?<div className={style.description}>{product.description}</div>:"" }
                {product?.priceCount.map((e)=>(
                    <div className={style.count}>
                        <div className={style.countText}>{e.count}/<div className={style.price}>{e.price}</div></div>

                    </div>
                ))}

            </div>
            <div className={style.close} onClick={handleDelete}/>
        </div>
    );
};

export default ProductItem;

