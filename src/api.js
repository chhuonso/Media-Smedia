// import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getImages = async (nextCursor) => {

    
    // const response = await axios(`${API_URL}/photos`)
    // .then(res => res.json())
    // .catch(err => console.log("ERRROOORRR", err))
    // console.log(response)
    const params = new URLSearchParams();

    if(nextCursor){
        params.append('next_cursor', nextCursor);
    }
    const response = await fetch(`${API_URL}/photos?${params}`)
    const responseJson = await response.json();
    console.log(responseJson)
    return responseJson;
    

};


