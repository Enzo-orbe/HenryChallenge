import React from 'react'
import {Container, Button, Row, Col} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import {paginacion, paginacionMenos} from "../store/actions";

export default function Botones({query}) {
    
    const dispatch = useDispatch();
    const pagination = useSelector(state => state.offset);

    return (
        <Container style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Row>   
                <Col>
                <Button style={{ margin: "5px"}} onClick={() => dispatch(paginacionMenos(query))}>
                       Anterior
                   </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                {pagination < 60 ? (
                    <Button  style={{ margin: "5px"}} onClick={() => dispatch(paginacion(pagination))}>
                    Siguiente
                    </Button>
                ) : null}
                </Col>
            </Row>     
        </Container>
    )
}
