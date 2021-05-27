import {actionTypes} from '../constants/action-type'

export const setProducts = (products) =>{
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectProducts = (products) =>{
    return {
        type:actionTypes.SELECTED_PRODUCTS,
        payload:products
    }
}

// export const removeProducts = (products) =>{
//     return {
//         type:actionTypes.REMOVE_SELECTED_PRODUCTS,
//         payload:products
//     }
// }