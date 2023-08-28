
import { useEffect } from "react";
import Card from "../Card/Card";
import { useApiParams } from "./../../Hooks/useApiParams.js";
import { useParams } from "react-router-dom";


export default function CategoryPage() {

    const {categoryId} = useParams()

    const { apiData  , fetchData} = useApiParams(
        { "category": `${categoryId}` }
      );
    useEffect(() => {
    fetchData()
    
    }, [categoryId])
          
  return (
    <>

      <Card apiData={apiData} />
  </>  )
}
