import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBlocksByTimestamp, previousDate, nextDate} from "../store/ListOfBlocks/actions";
import {getBlocks, getTimeStamp} from "../store/ListOfBlocks/reducer";
import {Jumbotron} from "react-bootstrap";
import Blocks from "../components/ListOfBlocks/Blocks";
class ListOfBlocks extends Component{
    componentDidMount() {
        this.props.getBlocks();
    }

    render(){
        const {blocks, timestamp, nextDate, previousDate} = this.props;
        return(
            <Jumbotron>
                <Blocks blocks={blocks} timestamp={timestamp} nextDate={nextDate} previousDate={previousDate}/>
            </Jumbotron>
        )
    }
}
const mapStateToProps = (state)=>{
    const blocks = getBlocks(state);
    const timestamp = getTimeStamp(state);
    console.log('mapStateToProps timestamp', timestamp);
    return {
        blocks,
        timestamp
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getBlocks: ()=>dispatch(getBlocksByTimestamp()),
        previousDate: ()=>dispatch(previousDate()),
        nextDate: ()=>dispatch(nextDate())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListOfBlocks);