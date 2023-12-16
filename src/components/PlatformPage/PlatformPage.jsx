import { useEffect } from "react";
import Card from "../Card/Card";
import { useApiParams } from "./../../Hooks/useApiParams.js";
import { useParams } from "react-router-dom";

export default function PlatformPage() {
  const { platformId } = useParams();

  const { apiData, fetchData } = useApiParams({ platform: `${platformId}` });
  useEffect(() => {
    fetchData();
  }, [platformId]);

  return (
    <>
      <Card apiData={apiData} />
    </>
  );
}
