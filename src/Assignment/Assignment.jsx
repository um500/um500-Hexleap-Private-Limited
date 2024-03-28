import React, { useContext } from "react";
import Card, { AddvertisementCard } from "../Common/Card";
import Collection from "./Collection";
import { DarkModeToggle } from "../Common/DarkModeToggle";
import { MainContext } from "../Context/MainContext";


function Assignment() {
  let allPlayers = [
    {
      id: 1,
      name: "Sacramento River Cats",
      totalEvent: "48 Events",
      image: "player1.png",
      sports: "Baseball",
    },
    {
      id: 2,
      name: "Las Vegas Aviators",
      totalEvent: "28 Events",
      image: "player2.png",
      sports: "Baseball",
    },
    {
      id: 3,
      name: "New Jersey Devils",
      totalEvent: "15 Events",
      image: "player3.png",
      sports: "ice hockey",
    },
    {
      id: 4,
      name: "Las Vegas Aviators",
      totalEvent: "28 Events",
      image: "player4.png",
      sports: "Baseball",
    },
  ];
  let { isDarkMode } = useContext(MainContext);

  return (
    <div
      className={`h-full w-full pb-[45px] transition ${isDarkMode ? "bg-[#292B32]" : "bg-[#F7F7F8]"
        }`}
    >
      <div className=" max-w-[1249px] mx-auto pt-[46px] ">
        <div className="flex justify-between items-center">
          <div className="text-start">
            <h1
              className={`font-bold text-xl mb-[3px] transition px-2 md:px-0 ${!isDarkMode ? "" : "text-[white]"
                }`}
            >
              Sports
            </h1>
            <div className="w-[65px] border mb-[25px] mx-2 md:mx-0 border-[#738FFF]"></div>
          </div>
          <div>
            <DarkModeToggle />
          </div>
        </div>

        {/* Sports Section - Starts Here */}
        <section className="px-2 max-w-[1249px] mx-auto grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-2 md:gap-x-4 mb-5 px-2 md:px-0">
          {allPlayers.length >= 1
            ? allPlayers.map((playerCard, playerCardIndex) => {
              return <Card key={playerCard.id} playerCard={playerCard} />;
            })
            : "Loading...."}
          <div className="col-span-2 md:col-span-1">
            <AddvertisementCard />
          </div>
        </section>
        <div className="flex justify-center items-center">
          <button className="px-[30px] py-[10px] bg-[#2C9CF0] transition hover:bg-[#257ec1] rounded-[3px] text-[white]">
            See More
          </button>
        </div>

        {/* Collection Section - Starts Here */}
        <div className={`mt-[25px] max-w-[1240px] mx-auto ${isDarkMode ? "bg-[#18282A]" : "bg-[#F7F7F8]"
        }`}>
          <div className="max-w-[917px] mx-auto text-center pt-[30px] md:mt-[50px] lg:mt-[123px]">
            <h2 className={`font-[700] text-[30px] md:text-[40px] lg:text-[50px] ${!isDarkMode ? 'text-[#000]' : 'text-[#DFDFDF]'} `}>
              Collection Spotlight
            </h2>
            <p className={`${!isDarkMode ? 'text-[#000]' : 'text-[#fff]'} text-[14px] mt-[5px] md:mt-[15px] lg:mt-[25px] `}>
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
          </div>
          <Collection />
        </div>
      </div>
    </div>
  );
}

export default Assignment;
