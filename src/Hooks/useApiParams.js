import { useEffect, useState } from "react";
import axios from 'axios';




export function useApiParams(params){
  const [apiData , setApiData]= useState([]);
  async function fetchData() {
    
    const options = {
      method: 'GET',
      url:'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_URL,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST_URL
      }
    };
    const { data } = await axios.request(options);
    
    setApiData(data);

  }
  useEffect(() => {
    fetchData();
  }, []);
  
  return {fetchData,apiData}
}
