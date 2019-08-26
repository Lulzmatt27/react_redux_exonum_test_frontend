import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import './Header.css';
export default class Header extends Component{
    render(){
        return(
            <Navbar bg="light" className={'NavBar'}>
                <Navbar.Brand href="/">BLOCKCHAIN</Navbar.Brand>
            </Navbar>
        )
    }
}