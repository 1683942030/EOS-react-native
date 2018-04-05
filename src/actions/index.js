import * as types from '../constants/ActionTypes';

export const fetchBlockInfoBegin = () => ({ type: types.FETCH_BLOCK_INFO_BEGIN });
export const fetchBlockInfoSuccess = blockInfo => ({ type: types.FETCH_BLOCK_INFO_SUCCESS, payload: { blockInfo } });
export const fetchBlockInfoFailure = error => ({ type: types.FETCH_BLOCK_INFO_FAILURE, payload: { error } });

export function fetchBlockInfo() {
    return dispatch => {
        dispatch(fetchBlockInfo());
        return fetch('testnet1.eos.io/v1/chain/get_info')
            .then(handleErrors)
            .then(result => result.json())
            .then(json => {
                dispatch(fetchBlockInfoSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchBlockInfoFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
