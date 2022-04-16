import Axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL;


export const getImages = async () => {
    Axios.get(`${API_URL}/photos`)
    .then((res)=>{
        console.log(res.data, "GET AXIOS")
    })
    const response = await Axios.get(`${API_URL}/photos`)
    console.log(response, "THIS IS RESPONE")
    const responseJson = await response.data;

    return responseJson;
};