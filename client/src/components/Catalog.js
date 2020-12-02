import React from 'react';
import ProductCard from "./ProductCard"
import {useSelector} from "react-redux";
import { CardGroup, Container } from 'react-bootstrap';


export default function Catalog() {

    const Products = useSelector(state => state.products)
    const Error = useSelector(state => state.error)
    const prueba = Products.slice(0, 29)
    return (
        <>
        {Error ? <p>No Hay resultados para tu busqueda</p> : null}
        <Container style={{display: "flex", marginTop: "20px", alignItems: "center", justifyContent: "center"}}>
          <CardGroup>
          {Products &&  
              prueba.map(p => (
                  <ProductCard key={p.id} 
                  image={p.thumbnail}
                  title={p.title}
                  price={p.price}
                  currency={p.currency_id}
                  condition={p.condition}
                  stock={p.available_quantity}
                  />
              ))
              }
          </CardGroup>
          
        </Container>
        </>
    )
}
