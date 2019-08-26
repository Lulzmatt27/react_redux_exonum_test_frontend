import React, {Component} from 'react';
import {Pagination, Table, Col} from "react-bootstrap";
import _ from "lodash";
import {Link} from "react-router-dom";
import moment from 'moment';

export default class Blocks extends Component {
    render() {
        const {blocks, timestamp, nextDate, previousDate} = this.props;
        return (
            <div>
                <Pagination className={'justify-content-md-center'}>
                    <Pagination.Prev onClick={()=>{console.log('timestamp!!',timestamp); previousDate(timestamp)}}/>
                    <b>Блоки, добытые на : {moment(timestamp).format("DD-MM-YYYY")}</b>
                    <Pagination.Next onClick={()=>nextDate(timestamp)}/>
                </Pagination>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Рост</th>
                        <th>Хэш</th>
                    </tr>
                    </thead>
                    <tbody>
                    {blocks ? _.map(blocks, (block, index) => {
                        return <tr key={index}>
                            <td><Link to={`/block/${block.hash}`}>{block.height}</Link></td>
                            <td><Link to={`/block/${block.hash}`}>{block.hash}</Link></td>
                        </tr>

                    }) : null}
                    </tbody>
                </Table>
            </div>
        )
    }
}