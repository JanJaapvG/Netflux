import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getMovieData} from '../Store/HomePage/Actions'
import {selectStarWars} from '../Store/HomePage/Select'

export default function HomePage() {
    //declarations 
    const dispatch = useDispatch();

    // selects the query from select.js
    const StarWarsData = useSelector(selectStarWars);

    console.log("TADA", StarWarsData)
    
    /*
    1- make a dispatch call to API
    2- use a thunk function with a asyncranus call to API
    3- get data and controll with a console.log
    4- send the correct data in correct data type form to reducer
        4.5 use a action creator function
    5- create a reducer component
    6- import action creator function 
    7 - send reducer to store / check the store app to see if state was changed
    8 - utilize a useSelector to highlight data
    9 - useSelect data
    10- Reder data on page 
    */

    // triggers when page is loaded or if component changes
    useEffect(() => {
        dispatch(getMovieData())
    },[]);
    
    
    
    return (
        <div>
            {!!StarWarsData
            ? 
            <>
                <h1>{StarWarsData.Title}</h1>
            <img src={StarWarsData.Poster}/>
            </>  
            :
                <h1>"Loading Movie Data"</h1>
            }
        </div>
    )
}
