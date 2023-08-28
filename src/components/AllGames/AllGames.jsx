import React, { useEffect } from 'react';
import { useApiParams } from '../../Hooks/useApiParams.js';
import Card from '../Card/Card.jsx';

export default function AllGames() {
 
  const { apiData  , fetchData} = useApiParams(
    
  
  );
  

  useEffect(() => {
    fetchData()
  }, []);

 
  return (
    <>
       

        <Card apiData={apiData}/>
    </>
  );
}
