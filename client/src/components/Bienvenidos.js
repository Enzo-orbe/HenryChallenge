import React from 'react'
import {Jumbotron} from "react-bootstrap";

export default function Bienvenidos() {
    return (
        <Jumbotron>
            <h1>Bienvenidos!</h1>
            <p>
                Este proyecto consume los productos de la API de Mercado Libre,
                 busque un producto para comenzar!
            </p>
        </Jumbotron>
    )
}
