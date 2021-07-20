import React, {Component, useContext, Fragment, useState, useReducer} from 'react';
import axios from "axios";
import Context from "../../context/Context";
import Reducer from "../../context/Reducer";

const Search = () => {
    const [trackTitle, setTrackTitle] = useState({
        trackTitle: ''
    })
    const context = useContext(Context)
    console.log(context)
    const {searchTrack,track_list} = context

    // const [state, dispatch] = useReducer(Reducer, initalState)

    const onChange = (e) => {
        setTrackTitle(e.target.value)
        console.log(e.target.value)
    }

    const findTrack = (e) =>{
        e.preventDefault()
         axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
             .then(res=>{
                 searchTrack()
             })
    }

    return (
        <Fragment>
            <div className={'card card-body mb-4 p-4'}>
                <h1 className={'display-4 text-center'}>
                    <i className="fas fa-music">
                        Search for a song
                    </i>
                </h1>
                <p className={'lead text-center'}>Get the Lyrics for any song!</p>
                <form onSubmit={findTrack}>
                    <div className="form-grop">
                        <input type="text"
                               className="form-control form-control-lg"
                               placeholder={'Song Title...'}
                               name={trackTitle}
                               onChange={onChange}/>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block mb-5" type={'submit'}>Get the Lyrics</button>
                </form>
            </div>

        </Fragment>
    );
};

export default Search;
