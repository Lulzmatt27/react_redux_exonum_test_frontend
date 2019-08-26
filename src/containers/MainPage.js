import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Jumbotron} from "react-bootstrap";
import {getBlocks, getBitcoinRate} from "../store/MainPage/reducer";
import Chart from "../components/MainPage/Chart";
import SearchBar from "../components/MainPage/SearchBar";
import Blocks from "../components/MainPage/Blocks";
import {getLatestBlocks} from "../store/MainPage/actions";

class MainPage extends Component{
    componentDidMount() {
        this.props.getLatestBlocks()
    }

    render(){
        const {bitcoinRate, blocks} = this.props;
        const {values} = bitcoinRate;
        return(
            <Jumbotron>
                <SearchBar/>
                <Blocks blocks={blocks}/>
                <Chart values={values}/>
            </Jumbotron>
        )
    }
}
const mapStateToProps = (state) =>{
    const blocks = getBlocks(state);
    const bitcoinRate = getBitcoinRate(state);
    return {
        blocks,
        bitcoinRate
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getLatestBlocks: ()=>dispatch(getLatestBlocks())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);