import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ apiData }) {
  const Title = styled.h6`
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  `;

  const Cards = styled.div`
    transition: all 0.5s;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &:hover {
      transform: scale(1.06);
      cursor: pointer;
    }
  `;

  return (
    <>
      <div className="row mt-3 g-3 ">
        {apiData.map((game, index) => (
          <div className="col-xl-3 col-md-4 col-sm-6 d-flex flex-grow-1 " key={index}>
            <Cards className="  bg-secondary card overflow-hidden  ">
              <Link className="text-decoration-none " to={`/${game.id}`}>
                <img
                  src={game.thumbnail}
                  alt="gameimage"
                  className="w-100 mb-2 p-0"
                />
                <div className="p-2 ">
                  <Title>
                    {game.title}
                    <span className="badge bg-primary"> free</span>
                  </Title>
                  <p>
                    {game.short_description.split(" ").slice(0, 7).join(" ")}
                    ...
                  </p>

                  <p>{game.platform}</p>
                  <div>
                    <span className="badge badge-light">{game.genre}</span>
                    <i className="fa-solid fa-square-plus"></i>
                  </div>
                </div>
              </Link>
            </Cards>
          </div>
        ))}
      </div>
    </>
  );
}
