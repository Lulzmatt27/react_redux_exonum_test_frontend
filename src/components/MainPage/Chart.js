import React, {Component} from 'react';
import {Line} from "react-chartjs-2";

export default class Chart extends Component{
    render(){
        const {values} = this.props;
        console.log(values);
        return (
            <div>LINE CHART</div>
        )
    }
}