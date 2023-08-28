import React from "react";
import { useApiParams } from "../../Hooks/useApiParams";
import Card from "../Card/Card";

export default function Home() {
  const { apiData  } = useApiParams({ "sort-by": "popularity" });

  return (
    <>
      <div className="text-center">
        <h2 className="text-Secondary">
          Find & track the best 
          <span className="text-primary"> free-to-play</span> games!
        </h2>
        <p className="text-muted">
          Track what you've played and search for what to play next! Plus get
          free premium loot!
        </p>
        <button className="btn btn-outline-Secondary"></button>
      </div>

      <div>
        <h3 className="h2 text-Secondary">
          <i className="fa-solid fa-robot me-3"></i> Personalized
          Recommendations
        </h3>
      </div>

      <Card apiData={apiData.splice(0, 4)}></Card>
    </>
  );
}
