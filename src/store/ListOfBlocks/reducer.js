import Immutable from 'seamless-immutable';
import _ from 'lodash';
import * as type from './actionTypes'
let date = new Date();
const initialState = Immutable({
    blocks:[],
    timestamp: new Date()
})

export default function reduce(state = initialState, action = {}) {
    switch(action.type){
        case type.GET_BLOCKS:
            return state.merge({
                blocks: [...state.blocks, action.blocks],
                timestamp:action.timestamp
            });
        case type.NEXT_DATE:
            return state.merge({
                blocks:[action.blocks],
                timestamp: action.nextTimeStamp
            });
        case type.PREV_DATE:
            console.log('action', action);
            return state.merge({
                blocks: [action.blocks],
                timestamp: action.prevTimeStamp
            });
        default:
            return state;
    }
}


//selectors

export function getBlocks(state) {
    const {blocks} = state.ListOfBlocksReducer;
    return _.first(blocks)
}
export function getTimeStamp(state){
    const {timestamp} = state.ListOfBlocksReducer;
    return timestamp;
}
