import React, {useState} from 'react';
import style from "./FormAddProduct.module.scss"
import {productAPI, useCreateProductMutation} from "../../service/productService";
import {IProduct} from "../../models/productModel";
const FormAddProduct = () => {


const [createProduct,{}] = productAPI.useCreateProductMutation()

    const [nameFood,setNameFood] = useState('')
    const [descriptionFood , setDescriptionFood] = useState('')
    const [countFood , setCountFood] = useState('')
    const [priceFood, setPriceFood] = useState('')
    const handleCreate = async ()=>{
        if(nameFood === ""){
            alert('Введите название продукта, проверка на путую строку)')
        }else {
            await createProduct({ title:nameFood,description:descriptionFood, priceCount:[{count:countFood , price:priceFood}]} as IProduct)
        }


    }

    return (
        <div className={style.form}>
            <div className={style.title}>Добавьте в меню новые блюда</div>
            <input className={style.input} placeholder={'Введите название блюда'} onChange={(e) =>setNameFood(e.target.value)}/>
            <input className={style.input} placeholder={'Введите краткое описание для блюда'} onChange={(e) =>setDescriptionFood(e.target.value)}/>
            <input className={style.input} placeholder={'Введите гарммовку блюда'} onChange={(e) =>setCountFood(e.target.value)}/>
            <input className={style.input} placeholder={'Введите цену блюда'} onChange={(e)=>setPriceFood(e.target.value)}/>
            <button className={style.button} onClick={handleCreate}>Добавить новое блюдо</button>
        </div>
    );
};

export default FormAddProduct;