import React from 'react';
import {Card, Row,Col} from "react-bootstrap"

export default function ProductCard({image, price, currency,stock, condition, title}) {
    return (
        <Row>
          <Col>
          <Card style={{ width: '20rem', height: "30rem" , margin: "5px"}}>
          <Card.Img variant="top" src={image} style={{height: "45%"}}/>
          <Card.Body>
           <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p style={{fontWeight: "bold"}}>Condition: <span style={{fontWeight: "normal"}}>{condition}</span></p>
            <br/>
             <p style={{fontWeight: "bold"}}>Price: <span style={{fontWeight: "normal"}}>{price} {currency}</span></p>
            <br />
           <p style={{fontWeight: "bold"}}>Stock: {stock ? stock : "No hay Stock"}</p>
            </Card.Text>
           </Card.Body>
          </Card>
          </Col>      
        </Row>
    

    )
}
