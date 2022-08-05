import { FETECH_PRODUCTS_BEGIN,FETECH_PRODUCTS_SUCCESS,FETECH_PRODUCTS_FAILURE } from "../Actions/MusicProductsAction";

//pure js function
// export default function product_reducer(state=null,action)
// {
//     switch(action.type)
//     {
//         case 'FETCH_PRODUCTS':return action.payload;
//         default:return state;
//     }
// }


//saga code............
const intialstate={
    items:[],
    loading:false,
    error:null
}


export default function product_reducer(state=intialstate,action)
{
    switch(action.type)
    {
        case FETECH_PRODUCTS_BEGIN: return{
...state,
loading:true,
error:null,
items:[]
        };
        case FETECH_PRODUCTS_SUCCESS: return{
...state,
loading:false,
items:action.payload
        };
        case FETECH_PRODUCTS_FAILURE: return{
...state,
loading:false,
error:action.payload.error,
items:[]
        };
        default:return state;
    

    }
}