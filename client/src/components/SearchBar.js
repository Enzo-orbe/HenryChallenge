import React, {useState} from 'react'
import { Navbar, FormControl, Form, Button} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import{getProducts} from "../store/actions";
import Botones from "./Botones";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const handleChange = e => {
        setQuery({
            [e.target.name] : e.target.value
        })
    }
    const Products = useSelector(state => state.products)
    const dispatch = useDispatch();
    const offset = 0;
    const handleClick = async (e) => {
      e.preventDefault()
      await dispatch(getProducts(query.query, offset))     
    }

    return (
        <div>
            <Navbar bg="primary" variant="dark" className="justify-content-between">
                <Navbar.Brand href="/">Henry Challenge</Navbar.Brand>
                {Products.length ? <Botones query={query.query} /> : null }             
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" name="query"  onChange={handleChange} />
                <Button variant="outline-light" onClick={handleClick}>Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}