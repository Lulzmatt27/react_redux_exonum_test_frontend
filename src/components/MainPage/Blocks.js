import React, {Component} from 'react';
import {ListGroup, Table, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import _ from 'lodash';

export default class Blocks extends Component {
    render() {
        const {blocks} = this.props;
        return (
            <div>
                <Row className={"justify-content-md-center"}>
                <Link to={"/blocks"}>Посмотреть больше блоков</Link>
                </Row>
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
