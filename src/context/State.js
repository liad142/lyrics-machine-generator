import React,{useReducer} from 'react';
import axios from "axios";
import Context from "./Context";
import Reducer from "./Reducer";

import {
    GET_TRACKS, SEARCH_TRACK,
} from '../context/types'


const TrackState = props => {
    const initalState = {
        track_list : [],
        search_track_list:[],
        heading:'Top 10 Tracks'
    }


    const [state, dispatch] = useReducer(Reducer, initalState)

    const searchTrack = async () =>{
        try{
          const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            dispatch({
                type:'SEARCH_TRACK',
                payload:res.data.message.body.track_list
            })
        }catch (err){
            console.log(err)
        }
    }

    const getTracks = async () =>{
        try {
            const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)

            dispatch({
                type:'GET_TRACKS',
                payload:res.data.message.body.track_list
            })
        }catch (err){
            console.log(err)
        }
    }


    return (
        <Context.Provider value={{
            track_list: state.track_list,
            heading:state.heading,
            search_track_list:state.search_track_list,
            getTracks,searchTrack
        }}>
            {props.children}
        </Context.Provider>

    );
};

export default TrackState;
