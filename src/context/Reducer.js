import {
    GET_TRACKS,
    SEARCH_TRACK
} from '../context/types'

export default (state,action) =>{
    switch (action.type){
        case GET_TRACKS:
            return {
                ...state,
                track_list:action.payload
            }
        case SEARCH_TRACK :
            return {
                ...state,
                search_track_list:action.payload,
                heading:'Search Results : '
            }
        default:
            return state
    }
}
