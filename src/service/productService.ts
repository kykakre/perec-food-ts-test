import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IProduct} from "../models/productModel";

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes:['Post'],
    endpoints: (builder) => ({
        fetchAllProducts: builder.query<IProduct[],number>({
            query: (limit:number = 2) => ({
                url: '/taste',
                params:{
                    _limit :limit
                }

            }),
            providesTags: result => ['Post']
        }),
        createProduct: builder.mutation<IProduct,IProduct>({
            query: (product) => ({
                url: '/taste',
                method:'POST',
                body:product,

            }),
            invalidatesTags:['Post']
        }),
        updateProduct: builder.mutation<IProduct,IProduct>({
            query: (product) => ({
                url: `/taste/${product.id}`,
                method:'PUT',
                body:product,

            }),
            invalidatesTags:['Post']
        }),
        deleteProduct: builder.mutation<IProduct,IProduct>({
            query: (product) => ({
                url: `/taste/${product.id}`,
                method:'DELETE',


            }),
            invalidatesTags:['Post']
        })
    })
})
 export const {useFetchAllProductsQuery, useCreateProductMutation , useDeleteProductMutation, useUpdateProductMutation} = productAPI