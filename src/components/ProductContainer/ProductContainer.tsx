import React, {useState} from 'react';
import style from "./ProductConatiner.module.scss"
import {productAPI,useFetchAllProductsQuery} from "../../service/productService";
import ProductItem from "../ProductItem/ProductItem"
import {IProduct} from "../../models/productModel";



const ProductContainer = () => {
    const {data} = productAPI.useFetchAllProductsQuery(100);
    const [ deleteProduct, {} ] = productAPI.useDeleteProductMutation()
    const [updateProduct, {}] = productAPI.useUpdateProductMutation()

    const handlerDelete = (product:IProduct) =>{
        deleteProduct(product)
    }

    const handleUpdate = (product:IProduct)=>{
        updateProduct(product)
    }

    const [product, setProduct] = useState('')
    const filteredProduct =  data?.filter(data =>{
        return data.title.toLowerCase().includes(product.toLowerCase())
    })



    return (
        <><input className={style.input} placeholder={"Найдите продукт по названию"} onChange={(e)=> setProduct(e.target.value)}/>
            <div className={style.content}>

                {filteredProduct?.map(product => <ProductItem remove={handlerDelete} update={handleUpdate} product={product}/>)}
            </div>
        </>

    );
};

export default ProductContainer;