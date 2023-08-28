// import React from "react";
// import Slider from "react-slick";

// export default function SimpleSlider({apiData}) {
//   var settings = {
   
//     infinite: true,
//     autoplay: true,
    
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     swipeToSlide: true,
//   };
//   return (
//     <Slider {...settings}>


// {apiData.screenshots.map((ele ,index)=>(
// <>
//   <div>
// <img
//               src={ele[index].image}
//               alt="screenshoot"
//               className="w-100"
//               />
//               </div>
//               </>
// ))}
//      {/* <div>
      
//        <img
//               src={apiData.screenshots[0].image}
//               alt="screenshoot"
//               className="w-100"
//             /></div>
//   <div> <img
//               src={apiData.screenshots[1].image}
//               alt="screenshoot"
//               className="w-100"
//             /></div>
//   <div> <img
//               src={apiData.screenshots[2].image}
//               alt="screenshoot"
//               className="w-100"
//             /></div> */}
//     </Slider>
//   );
// }