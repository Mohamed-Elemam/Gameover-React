import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
// import styled from "styled-components";

export default function Game() {
  let { id } = useParams();
// const [loading, setLoading]=useState(false)  
// {if (loading  ==true){ <div class="lds-facebook"><div></div><div></div><div></div></div>}
  const [apiData, setApiData] = useState('');
// setLoading(true)
  async function getAll() {
    const options = {
      method: "GET",
      url:`https://free-to-play-games-database.p.rapidapi.com/api/game`,
      params: { id },
      headers: {
        "X-RapidAPI-Key": "96e963fb03mshdac440060e8930fp19f94ajsn35585d6b1e4d",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const { data } = await axios.request(options);

    setApiData(data);
    
  }
  console.log(apiData);
  
  
  
useEffect(() => { 
  getAll()
  
}, [])


const Section = styled.section`

background: linear-gradient(rgba(128, 128, 128, 0.6),rgba(128, 128, 128, 0.6)), url(https://www.freetogame.com/g/${id}/background.jpg);
background-size: cover;
background-position: center;
background-repeat: no-repeat;

`



  return (
    <>
    <Navbar></Navbar>
      <Section>
        
      <div className="container">
      <div className="row ">
          <div className="col-md-4  my-5">
            <img
              src={apiData.thumbnail}
              alt="gameimage"
              className="w-100 rounded-2 "
            />
            {/* <video className="w-100 my-3 " controls >
              <source
                src={`https://www.freetogame.com/g/${id}/videoplayback.webm`}
              />
            </video> */}

            <div className="row my-4">
              <div className="col-2">
                <span className="btn btn-secondary disabled "> free</span>
              </div>
              <div className="col-10">
                <Link
                  className="btn btn-primary w-100 pointer"
                  to={apiData.game_url}
                  target="_blank"
                >
                  PLAY NOW
                  <i className="fa-solid fa-arrow-right-from-bracket mx-1"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-8  my-5">
            <h2 >{apiData.title}</h2>
            <h4 className=" my-2">About {apiData.title}</h4>
            <p>{apiData.description} </p>

            {(apiData.minimum_system_requirements) ? 
             ( <>
             <h4 className=" my-2">Minimum System Requirements</h4>
            <p>
              Graphics:
              <span> {apiData.minimum_system_requirements.graphics}</span>
            </p>
            <p>
              Memory:<span> {apiData.minimum_system_requirements.memory}</span>
            </p>
            <p>
              OS: <span>{apiData.minimum_system_requirements.os}</span>
            </p>
            <p>
              Processor:
              <span>{apiData.minimum_system_requirements.processor}</span>
            </p>
            <p>
              Storage:
              <span> {apiData.minimum_system_requirements.storage}</span>
            </p>  
            
             </>
            ) : ""}
           

           

      
            {(apiData.screenshots) ? 
             ( <>
              <h4 >{apiData.title} Screenshots</h4>
            
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <img
              src={apiData.screenshots[0].image}
              alt="screenshoot"
              className="w-100"
            />
    </div>
    <div class="carousel-item">
     <img
              src={apiData.screenshots[1].image}
              alt="screenshoot"
              className="w-100"
            />
    </div>
    <div class="carousel-item">
     <img
              src={apiData.screenshots[2].image}
              alt="screenshoot"
              className="w-100"
            />
    </div>
  </div>
  
</div>

            
             </>
            ) : ""}


<h4 className=" my-4">Additional Information</h4>
           
       
            <div className="row d-flex justify-content-between">
              <div className="col-md-4 col-sm-6">
                <p>Title</p>
                <p>{apiData.title} </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <p>Developer</p>
                <p>{apiData.developer} </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <p>Publisher</p>
                <p>{apiData.publisher} </p>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-md-4 col-sm-6">
                <p>Release Date</p>
                <p>{apiData.release_date} </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <p>Genre</p>
                <p>{apiData.genre} </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <p>paltform</p>
                {apiData.platform === "Windows" ? (
                  <p>
                    <i className="fab fa-windows mx-2"></i> {apiData.platform}
                  </p>
                ) : (
                  <p>
                    <i className="fas fa-window-maximize mx-2"></i>
                    {apiData.platform}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </Section>
    </>
  )
                }
