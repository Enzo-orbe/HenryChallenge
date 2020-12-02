import {SEARCH_PRODUCT, NEW_PRODUCT, USED_PRODUCT, MAYOR_PRECIO, MENOR_PRECIO, PAGINACION, PAGINACION_MENOS} from "./constants";
import axios from "axios";

export function getProducts(query) {
    console.log(query)
    return function(dispatch){
        axios.get(`http://localhost:3001/search?q=${query}`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: SEARCH_PRODUCT, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: "ERROR", payload: err})
        })
    }
}

export function paginacion(paginacion) {
    return function(dispatch){
            dispatch({ type: PAGINACION, payload: paginacion})      
    }
}

export function paginacionMenos(query) {
    return function(dispatch){
        axios.get(`http://localhost:3001/search?q=${query}`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: PAGINACION_MENOS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })      
    }
}

export function newProducts(condition){
    return function(dispatch){
        dispatch({ type: NEW_PRODUCT, payload: condition})
    }
}

export function usedProducts(condition){
    return function(dispatch){
        dispatch({ type: USED_PRODUCT, payload: condition})
    }
}

export function mayorPrecio(){
    return function(dispatch){
        dispatch({ type: MAYOR_PRECIO})
    }
}

export function menorPrecio(){
    return function(dispatch){
        dispatch({ type: MENOR_PRECIO})
    }
}