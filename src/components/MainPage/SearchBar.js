import React, {Component} from 'react';
import {Button, Form, Col, Dropdown, DropdownButton} from "react-bootstrap";

export default class SearchBar extends Component{
    render(){
        return (
           <Form>
               <Form.Row>
                   <Col xs={8}>
                       <Form.Control placeholder={"Search for things like address, transaction, block"}/>
                   </Col>
                   <Col xs={2}>
                       <DropdownButton id="dropdown-basic-button" title="Тип поиска">
                           <Dropdown.Item >Поиск по Hash</Dropdown.Item>
                           <Dropdown.Item >Поиск по Height</Dropdown.Item>
                       </DropdownButton>

                   </Col>
                   <Col>
                       <Button variang={"primary"}>Применить</Button>
                   </Col>
               </Form.Row>
           </Form>

        )
    }
}