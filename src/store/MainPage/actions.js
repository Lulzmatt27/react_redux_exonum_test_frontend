import _ from 'lodash';
import axios from 'axios';

import * as types from './actionTypes';
import * as MainPageSelectors from '../MainPage/reducer';
export function search(){
    return async(dispatch, getState) =>{
        try{

            dispatch({type: types.SEARCH_BLOCK_OR_TRANSACTION, payload:{}})
        }
        catch(error){
            console.error(error);
        }
    }
}
// https://blockchain.info/latestblocks?format=json&cors=true
export function getLatestBlocks(){
    return async(dispatch, getState) =>{
        try{
            const blocks = _.takeRight((await axios
                .get("https://blockchain.info/latestblocks", {
                    params:{
                        format:"json",
                        cors:true
                    }
                })).data.blocks, 10);
            dispatch({type:"GET_LATEST_BLOCKS", blocks})
        }
        catch(error){
            console.error(error)
        }
    }
}