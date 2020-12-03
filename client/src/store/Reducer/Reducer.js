import {SEARCH_PRODUCT, NEW_PRODUCT, USED_PRODUCT, MAYOR_PRECIO, PAGINACION_MENOS, PAGINACION, MENOR_PRECIO} from "../constants";

const initialState = {
    products: [],
    offset: 0,
    error: "",
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_PRODUCT:
            return {
                ...state,
                products: action.payload.results,
                offset: action.payload.paging.offset, 
            }
        case "ERROR":
          return  {
              ...state,
              error: "Hubo un Error"
            }    
        case PAGINACION:
            return {
                ...state,
                products: [...state.products].splice(action.payload + 30, action.payload + 60),
                offset: action.payload + 60
            }
        case PAGINACION_MENOS:
            return {
                ...state,
                products: action.payload.results,
                offset: action.payload.paging.offset
            }    

        case NEW_PRODUCT: 
            return {
                ...state,
                products: [...state.products].sort((a,b) => a.condition > b.condition ? 1  : -1) 
            }  
        case USED_PRODUCT: 
            return { 
                ...state,
                products:[...state.products].sort((a,b) => a.condition < b.condition ?  1  : -1)
            }       
        case MAYOR_PRECIO: 
        return {
            ...state,
            products: [...state.products].sort((a, b) => a.price < b.price ? 1  : -1 )
        }    
        case MENOR_PRECIO: 
        return {
            ...state,
            products: [...state.products].sort((a, b) => a.price > b.price ? 1  : -1 )
        } 
        default: return state;
    }
}
