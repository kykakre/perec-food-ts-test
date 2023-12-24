import React from 'react';
import {productAPI, useFetchAllProductsQuery} from "../../service/productService";

const ProductContainer = () => {
    const {data:taste} = productAPI.useFetchAllProductsQuery('')
    console.log(taste)
    return (
        <div>

        </div>
    );
};

export default ProductContainer;