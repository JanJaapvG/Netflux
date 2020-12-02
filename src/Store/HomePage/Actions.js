import Axios from "axios";

// URL and keys, later to be added into a confic file => to .env => to gitignore
const API_KEY = '9e381b67';

export const URL = 'http://www.omdbapi.com/';

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

            dispatch(FetchedMovieData(response.data))


        }
        catch (e){console.log(e)

        }
    }
}

