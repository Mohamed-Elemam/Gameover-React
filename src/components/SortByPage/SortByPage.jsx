import { useEffect } from "react";
import Card from "../Card/Card";
import { useApiParams } from "./../../Hooks/useApiParams.js";
import { useParams } from "react-router-dom";

export default function SortByPage() {
  const { sortId } = useParams();

  const { apiData, fetchData } = useApiParams({ "sort-by": `${sortId}` });
  useEffect(() => {
    fetchData();
  }, [sortId]);

  return (
    <>
      <Card apiData={apiData} />
    </>
  );
}
