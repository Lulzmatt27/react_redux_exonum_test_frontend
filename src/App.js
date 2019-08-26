import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import MainPage from "./containers/MainPage";
import ListOfBlocks from "./containers/ListOfBlocks";
import Block from "./containers/Block";
import Transactions from "./containers/Transactions";
import Header from "./components/Header";
import * as reducers from './store/reducers';
import {Container} from "react-bootstrap";

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Container>
                <Router>
                    <Switch>
                        <Route path={'/'} exact={true} component={MainPage}/>
                        <Route path={'/blocks'} exact={true} component={ListOfBlocks}/>
                        <Route path={'/block/:hash'} exact={true} component={Block}/>
                        <Route path={'/transaction/:hash'} exact={true} component={Transactions}/>

                    </Switch>
                </Router>
            </Container>
        </Provider>
    );
}

export default App;
