import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {newProducts, usedProducts, mayorPrecio, menorPrecio} from "../store/actions";

export default function Filtrado() {

    const dispatch = useDispatch();

    const Products = useSelector(state => state.products)

   

  
    
    return (
        <Container style={{display: "flex", marginLeft: "35%"}}>
            <Row>
                <Col>
                <Button style={{ margin: "5px"}} onClick={() => dispatch(newProducts("new"))}>
                        Nuevo
                    </Button>
                </Col>
            </Row>  
            <Row>
                <Col>
                <Button style={{ margin: "5px"}} onClick={() => dispatch(usedProducts("used"))}>
                        Usado
                    </Button>
                </Col>
            </Row>       
            <Row>
                <Col>
                <Button style={{ margin: "5px"}} onClick={ () => dispatch(mayorPrecio()) }>
                        Mayor Precio
                    </Button>
                </Col>
            </Row>       
            <Row>
                <Col>
                <Button style={{ margin: "5px"}} onClick={ () => dispatch(menorPrecio()) }>
                        Menor Precio
                    </Button>
                </Col>
            </Row>            
        </Container>
    )
}
