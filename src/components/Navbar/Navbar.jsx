import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const categories = [
  "racing",
  "sports",
  "social",
  "shooter",
  "open-world",
  "zombie",
  "fantasy",
  "action-rpg",
  "action",
  "flight",
  "battle-royale",
];

const sortBy = ["release-date", "popularity", "alphabetical", "relevance"];
const platforms = ["pc", "browser"];

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-secondary  text-capitalize">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>
            <img src={logo} style={{ width: "50px" }} alt="logo" />
            <span className="text-white fw-bold mx-2">GameOver</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse fw-bold "
            id="navbarSupportedContent"
          >
            <>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={"all"}>
                    All <span className="sr-only">(current)</span>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Platforms
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {platforms.map((ele, index) => (
                      <Link
                        className="dropdown-item"
                        key={index}
                        to={`/platform/${ele}`}
                      >
                        {ele}
                      </Link>
                    ))}
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort-by
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {sortBy.map((ele, index) => (
                      <Link
                        className="dropdown-item"
                        key={index}
                        to={`/sortBy/${ele}`}
                      >
                        {ele}
                      </Link>
                    ))}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {categories.map((ele, index) => (
                      <Link
                        className="dropdown-item"
                        key={index}
                        to={`/Categories/${ele}`}
                      >
                        {ele}
                      </Link>
                    ))}
                  </div>
                </li>
              </ul>
            </>
          </div>
        </div>
      </nav>
    </>
  );
}
