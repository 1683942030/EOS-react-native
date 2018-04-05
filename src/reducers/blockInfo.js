import { FETCH_BLOCK_INFO_BEGIN, FETCH_BLOCK_INFO_SUCCESS, FETCH_BLOCK_INFO_FAILURE } from '../constants/ActionTypes';

const initialState = {
    server_version: 'null',
    head_block_num: 'null',
    last_irreversible_block_num: 'null',
    head_block_id: 'null',
    head_block_time: 'null',
    head_block_producer: 'null',
    recent_slots: 'null',
    participation_rate: 'null'
};

export default function blockInfo(state = initialState, action) {
    switch (action.type) {
        case FETCH_BLOCK_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        case FETCH_BLOCK_INFO_BEGIN:
            return {
                ...state,
                loading: true
            };
        case FETCH_BLOCK_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                items: actions.payload
            };
        default:
            return state;
    }
}
