import React, {Fragment, useContext, useEffect} from 'react';
import Context from "../../context/Context";
import Spinner from "../layout/Spinner";
import Track from "./Track";

const Tracks = () => {
    const context = useContext(Context)
    const {getTracks, track_list,heading} = context
    console.log(track_list)

    useEffect(() => {
        getTracks()
    }, [])

    return (
        <Fragment>
            {
                track_list === undefined && track_list.length !== 0 ? (<Spinner/>) :
                    <React.Fragment>
                        <h3 className={'text-center mb-4'}>{heading}</h3>
                        <div className={'row'}>
                            {track_list.map(item =>(
                                <Track key={item.track.track_id} track={item.track}/>
                            ))}

                        </div>
                    </React.Fragment>

            }
        </Fragment>
    );
};

export default Tracks;
