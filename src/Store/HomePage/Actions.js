import Axios from "axios";

// URL and keys, later to be added into a gonfic file => to .env => to gitignore

// http://www.omdbapi.com/?apikey=9e381b67&t=star+wars
export const URL = 'http://www.omdbapi.com/';

// 9e381b67
const API_KEY = '9e381b67';
console.log(API_KEY);


export const STARWARS = 'STARWARS_MOVIES';

// Action creator function always the same syntax
export function FetchedMovieData(data){
    console.log("ACTION CREATOR", data)
    return{
        type: STARWARS,
        payload: data,
    }
} 

// function that calls the asyn thunk method to retrieve the data while JS loads
export function getMovieData(){
    return async function thunk(dispatch, getState){
        try{
            const response = await Axios.get(`${URL}?apikey=${API_KEY}&t=star+wars`);
            console.log('MA DATA', response.data)
            console.log(API_KEY)

            dispatch(FetchedMovieData(response.data))


        }
        catch (e){console.log(e)

        }
    }
}

