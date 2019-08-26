import Immutable from 'seamless-immutable';
import _ from 'lodash';
import * as type from './actionTypes'
const initialState = Immutable({
    blocks:[],
    bitcoin_rate: {
        "status": "ok",
        "name": "Market Price (USD)",
        "unit": "USD",
        "period": "day",
        "description": "Average USD market price across major bitcoin exchanges.",
        "values": [
            {
                "x": 1564099200,
                "y": 9774.2575
            },
            {
                "x": 1564185600,
                "y": 9725.4025
            },
            {
                "x": 1564272000,
                "y": 9500.324166666665
            },
            {
                "x": 1564358400,
                "y": 9533.979333333333
            },
            {
                "x": 1564444800,
                "y": 9539.7125
            },
            {
                "x": 1564531200,
                "y": 9873.811666666668
            },
            {
                "x": 1564617600,
                "y": 10088.799999999997
            },
            {
                "x": 1564704000,
                "y": 10478.901666666667
            },
            {
                "x": 1564790400,
                "y": 10790.63
            },
            {
                "x": 1564876800,
                "y": 10826.275000000001
            },
            {
                "x": 1564963200,
                "y": 11713.161666666667
            },
            {
                "x": 1565049600,
                "y": 11759.019166666667
            },
            {
                "x": 1565136000,
                "y": 11703.738333333335
            },
            {
                "x": 1565222400,
                "y": 11803.88833333333
            },
            {
                "x": 1565308800,
                "y": 11816.912499999999
            },
            {
                "x": 1565395200,
                "y": 11586.1725
            },
            {
                "x": 1565481600,
                "y": 11377.804166666669
            },
            {
                "x": 1565568000,
                "y": 11397.801666666666
            },
            {
                "x": 1565654400,
                "y": 11144.38916666667
            },
            {
                "x": 1565740800,
                "y": 10450.813333333334
            },
            {
                "x": 1565827200,
                "y": 9988.947499999998
            },
            {
                "x": 1565913600,
                "y": 10230.733333333332
            },
            {
                "x": 1566000000,
                "y": 10292.383333333333
            },
            {
                "x": 1566086400,
                "y": 10295.117500000002
            },
            {
                "x": 1566172800,
                "y": 10605.825833333334
            },
            {
                "x": 1566259200,
                "y": 10746.507692307692
            },
            {
                "x": 1566345600,
                "y": 10169.094166666666
            },
            {
                "x": 1566432000,
                "y": 10030.746666666666
            },
            {
                "x": 1566518400,
                "y": 10255.9775
            },
            {
                "x": 1566604800,
                "y": 10158.540833333334
            }
        ]
    }
})

export default function reduce(state = initialState, action = {}) {
    switch(action.type){
        case type.GET_LATEST_BLOCKS:
            console.log('action.blocks', action.blocks);
            return state.merge({
                blocks: [...state.blocks, action.blocks]
            });
        default:
            return state;
    }
}


//selectors

export function getBlocks(state) {
    const {blocks} = state.MainPageReducer;
    return _.first(blocks);
}

export function getBitcoinRate(state){
    const {bitcoin_rate} = state.MainPageReducer;
    return bitcoin_rate
}