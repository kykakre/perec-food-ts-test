import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IProduct} from "../models/productModel";

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        fetchAllProducts: builder.query<IProduct[], string>({
            query: () => ({
                url: '/taste'
            })
        })
    })
})


export const {useFetchAllProductsQuery} = productAPI
