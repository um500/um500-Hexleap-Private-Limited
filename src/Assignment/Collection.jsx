import React, { useContext, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainContext } from "../Context/MainContext";
import Slider from "react-slick";

function Collection() {
    let allCollections = [
        {
            id: 1,
            title: "Las Vegas Aviators",
            timing: "Oct 15 | Sun | 4:30 PM",
            address:"Las Vegas Ballpark, Las Vegas, Nevada",
            image: "sliderImage1.png",
            purchase: "Take Flight Collection"
        },
        {
            id: 2,
            title: "Sacramento River Cats",
            timing: "Oct 15 | Sun | 4:30 PM",
            address:"Sutter Health Park, Sacramento, California",
            image: "sliderImage2.png",
            purchase: "Orange Collection"
        },
        {
            id: 3,
            title: "Las Vegas Aviators",
            timing: "Oct 15 | Sun | 4:30 PM",
            address:"Las Vegas Ballpark, Las Vegas, Nevada",
            image: "sliderImage3.png",
            purchase: "Take Flight Collection"
        },
    ]
  
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div className="slider-container max-w-[1086px] mx-auto">
      <div className="max-w-[850px] mx-auto">
        <Slider {...settings}>
         {allCollections.length >= 1
          ? allCollections.map((collectionCard, collectionCardIndex) => {
              return <CardCollection key={collectionCard.id} collectionCard={collectionCard} />;
            })
          : "Loading...."}
           </Slider>
      </div>
    </div>
  );
}

export default Collection;

export let CardCollection = ({collectionCard}) => {
  
  let { isDarkMode } = useContext(MainContext);
  
  
  return (
    <div className="w-full ">
          <div className="max-w-[257px] mx-auto relative">
            {
              !isDarkMode?
              (<img
              src={require(`../assets/images/collectionBack.png`)}
              alt=""
              className="h-[auto] max-w-[100%] object-cover rounded-t-sm"
            />)
                    :
                    (<img
              src={require(`../assets/images/collectionBackDark.png`)}
              alt=""
              className="h-[auto] max-w-[100%]  rounded-t-sm"
            />)
            }
  
      <div className="absolute h-full w-full bg-[transparent] top-0 left-0 px-[14px] pt-[13px]">
        <img
          src={require(`../assets/images/${collectionCard.image}`)}
          alt=""
          className="h-[auto] max-w-[100%] object-cover rounded-t-sm"
        />

        <div className="max-w-[210px] mx-auto ">
          <div className="text-center">
            <div className={` ${!isDarkMode ? 'text-[#000]' : 'text-[#fff]'} text-[17px] font-[600] pt-[8px]`}>
              {/* Las Vegas Aviators */}
              {collectionCard.title}
            </div>
            <div className={` ${!isDarkMode ? 'text-[#000]' : 'text-[#fff]'} text-[14px] font-[500] pt-[5px]`}>
              {collectionCard.timing}
            </div>
            <p className={` ${!isDarkMode ? 'text-[#000]' : 'text-[#DFDFDF]'} text-[14px] tracking-tight font-[400] pt-[6px] `}>
            {collectionCard.address}
            </p>
            <button className={`${!isDarkMode ? 'bg-[#1D1D1F] hover:bg-[#000000]' : 'bg-[#000000] hover:bg-[#1D1D1F]'} transition  text-[white] py-[10px] mt-[6px] w-full text-[13px]`}>
              {collectionCard.purchase}</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
};

// Slider buttons custom

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", cursor: "pointer" }}
        onClick={onClick}
      >
          <svg className="hoverParent" width="37" height="49" viewBox="0 0 37 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-0.5" y="0.5" width="35.7491" height="47.9988" transform="matrix(-1 0 0 1 35.749 0)" className="stroke"/>
          <path d="M13.5945 33.6407C13.3245 33.3706 13.1727 33.0043 13.1727 32.6223C13.1727 32.2403 13.3245 31.874 13.5945 31.6038L20.7251 24.4733L13.5945 17.3428C13.3321 17.0711 13.1869 16.7072 13.1902 16.3295C13.1935 15.9518 13.345 15.5905 13.6121 15.3234C13.8791 15.0563 14.2404 14.9048 14.6181 14.9016C14.9958 14.8983 15.3597 15.0435 15.6314 15.3059L23.7804 23.4549C24.0504 23.725 24.2021 24.0913 24.2021 24.4733C24.2021 24.8553 24.0504 25.2216 23.7804 25.4917L15.6314 33.6407C15.3613 33.9108 14.9949 34.0625 14.613 34.0625C14.231 34.0625 13.8646 33.9108 13.5945 33.6407Z"  className="hoverEffect"/>
        </svg>

      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", cursor: "pointer" }}
        onClick={onClick}
      >
        <svg className="hoverParent" width="37" height="49" viewBox="0 0 37 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="35.7491" height="47.9988"  className="stroke"/>
          <path d="M23.1545 33.6407C23.4246 33.3706 23.5763 33.0043 23.5763 32.6223C23.5763 32.2403 23.4246 31.874 23.1545 31.6038L16.024 24.4733L23.1545 17.3428C23.4169 17.0711 23.5621 16.7072 23.5588 16.3295C23.5555 15.9518 23.404 15.5905 23.137 15.3234C22.8699 15.0563 22.5086 14.9048 22.1309 14.9016C21.7532 14.8983 21.3893 15.0435 21.1176 15.3059L12.9686 23.4549C12.6986 23.725 12.5469 24.0913 12.5469 24.4733C12.5469 24.8553 12.6986 25.2216 12.9686 25.4917L21.1176 33.6407C21.3878 33.9108 21.7541 34.0625 22.1361 34.0625C22.518 34.0625 22.8844 33.9108 23.1545 33.6407Z"  className="hoverEffect"/>
        </svg>
      </div>
    );
  }
  
