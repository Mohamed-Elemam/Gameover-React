import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
// import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import ExampleCarouselImage from 'react-bootstrap/ExampleCarouselImage'; 


export default function Game() {
  let { id } = useParams();
// const [loading, setLoading]=useState(false)  
// {if (loading  ==true){ <div class="lds-facebook"><div></div><div></div><div></div></div>}
  const [apiData, setApiData] = useState('');
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

const navigate = useNavigate()

// setLoading(true)

  async function getGameData() {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_GAME_DETAILS_API_URL,
      params: { id },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_URL,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST_URL
      },
    }
    const response= await axios.request(options).then((response) => {
    setApiData(response?.data);
    console.log(response?.data)
      
    }).catch((err) => {
      console.log(err)
      console.log(err?.response?.data?.status_message)
     if( err?.response?.data?.status_message=== 'No game found with that id') navigate('/NotFound')
    });
  }
  
useEffect(() => { 
  getGameData()
  
}, [])


const Section = styled.section`

background: linear-gradient(rgba(128, 128, 128),rgba(128, 128, 128,0.9)),
 url(https://www.freetogame.com/g/${id}/background.jpg);
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

            {/* {(apiData.minimum_system_requirements) ?  */}
             {/* ( <> */}
             <h4 className=" my-2">Minimum System Requirements</h4>
            <p>
              Graphics:
              <span> {apiData?.minimum_system_requirements?.graphics}</span>
            </p>
            <p>
              Memory:<span> {apiData?.minimum_system_requirements?.memory}</span>
            </p>
            <p>
              OS: <span>{apiData?.minimum_system_requirements?.os}</span>
            </p>
            <p>
              Processor:
              <span>{apiData?.minimum_system_requirements?.processor}</span>
            </p>
            <p>
              Storage:
              <span> {apiData?.minimum_system_requirements?.storage}</span>
            </p>  
            
             {/* </> */}
            {/* ) : ""} */}
           

           {/* #################slider */}
           <Carousel activeIndex={index} onSelect={handleSelect}>
           {apiData?.screenshots?.map((ele , index)=>(
    <Carousel.Item  key={index}>
    <img

src={ele.image}
alt="screenshoot"
className="w-100"
/>
    </Carousel.Item>
    
    ))}
   
     
    </Carousel>
    
     
   
<h4 className=" my-4">Additional Information</h4>
           
       
            <div className="row d-flex justify-content-between">
              <div className="col-md-4 col-sm-6">
                <strong>Title</strong>
                <p>{apiData.title} </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <strong>Developer</strong>
                <p>{apiData.developer} </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <strong>Publisher</strong>
                <p>{apiData.publisher} </p>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-md-4 col-sm-6">
                <strong>Release Date</strong>
                <p>{apiData.release_date} </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <strong>Genre</strong>
                <p>{apiData.genre} </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <strong>paltform</strong>
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
