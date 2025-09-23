import React from "react";
import bannerImg from "../../assets/banner-main.png";
import bannerBg from "../../assets/bg-shadow.png";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers, removePlayer, setToggle }) => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-6 rounded-4xl px-4">
        <div
          className="text-center"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="py-10">
            <img className="mx-auto mb-6" src={bannerImg} alt="" />
            <h1 className="font-bold text-xl md:text-3xl mb-6">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-6 text-gray-400">
              Beyond Boundaries Beyond Limits
            </p>
            <button className="btn">Claim Free Credit</button>
          </div>
        </div>
      </div>

      {purchasedPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          key={player["player-name"]}
          player={player}
        ></SelectedCard>
      ))}

      <div className="max-w-[1200px] mx-auto mb-[50px] px-4">
        <button
          onClick={() => setToggle(true)}
          className={`border-0 rounded-2xl px-5 py-3 mt-11 bg-[#E7FE29]`}
        >
          Add More Player
        </button>
      </div>
    </>
  );
};

export default SelectedPlayers;
