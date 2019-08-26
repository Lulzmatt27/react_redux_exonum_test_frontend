// https://blockchain.info/blocks/$time_in_milliseconds?format=json
import _ from 'lodash';
import axios from 'axios';
import * as type from './actionTypes';
import {getTimeStamp} from "./reducer";

// import moment from 'moment';
export function getBlocksByTimestamp() {
    return async (dispatch, getState) => {
        // const {timestamp} = getState().ListOfBlocksReducer;
        let date = new Date();
        let timestamp = date.getTime();
        const blocks = await getBlocksByTimeStamp(timestamp);
        dispatch({type: type.GET_BLOCKS, blocks, timestamp})

    }
}
//проверить даты на иммутабельность(пагинацию доделать)

export function previousDate() {
    return async (dispatch, getState) => {
        let timestamp = getTimeStamp(getState());
        let prevTimeStamp = new Date(timestamp);
        prevTimeStamp.setDate(prevTimeStamp.getDate()-1);
        const blocks = await getBlocksByTimeStamp(prevTimeStamp.getTime());
        dispatch({type: type.PREV_DATE, blocks, prevTimeStamp})
    }
}

export function nextDate() {
    return async (dispatch, getState) => {
        let timestamp = getTimeStamp(getState());
        let nextTimeStamp = new Date(timestamp);
        nextTimeStamp.setDate(nextTimeStamp.getDate()+1);
        const blocks = await getBlocksByTimeStamp(nextTimeStamp.getTime());
        dispatch({type: type.NEXT_DATE, blocks, nextTimeStamp})

    }
}

async function getBlocksByTimeStamp(timestamp) {
    try {
        const {blocks} = (await axios
            .get(`https://blockchain.info/blocks/${timestamp}`, {
                params: {
                    format: "json",
                    cors: true
                }
            })).data;
        return blocks
    } catch (error) {
        return [];
    }
}