//import json from '../JSON/MusicProducts.json'

export const FETECH_PRODUCTS_BEGIN='FETECH_PRODUCTS_BEGIN'
export const FETECH_PRODUCTS_SUCCESS='FETECH_PRODUCTS_SUCCESS'
export const FETECH_PRODUCTS_FAILURE='FETECH_PRODUCTS_FAILURE'

export const fetchProductsBegin=()=>(
    {
        type:FETECH_PRODUCTS_BEGIN
    }
)
export const fetchProductsSuccess=products=>(
    {
        type:FETECH_PRODUCTS_SUCCESS,
        payload:products
    }
)
export const fetchProductsFailure=error=>(
    {
        type:FETECH_PRODUCTS_FAILURE,
        payload:{error}
    }
)


// export default function fetch_products()
// {
//     return{
//         type:'FETCH_PRODUCTS',
//         payload:json.products
//     }
// }