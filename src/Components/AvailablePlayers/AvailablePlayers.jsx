import React, { use } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/flag.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {playerData.map((player) => {
        return (
          <div className="card bg-base-100 shadow-sm p-4">
            <figure>
              <img
                className="w-full h-[300px]"
                src={player["player-image"]}
                alt="Player"
              />
            </figure>
            <div className="mt-5">
              <div className="flex gap-2 items-center">
                <img src={userImg} alt="" />
                <h2 className="card-title">{player["player-name"]}</h2>
              </div>
              <div className="flex justify-between items-center mt-4 border-b-1 pb-2 border-gray-300">
                <div className="flex items-center gap-3">
                  <img src={flagImg} alt="flag-logo" />
                  <span>{player["player-country"]}</span>
                </div>
                <button className="btn">{player["playing-role"]}</button>
              </div>

              <div className="flex justify-between font-bold">
                <span>Rating:</span>
                <span>{player.rating}</span>
              </div>

              <div className="flex justify-between mt-4">
                <span className="font-bold">{player["batting-style"]}</span>
                <span>{player["bowling-style"]}</span>
              </div>

              <div className="card-actions mt-3 flex justify-between items-center">
                <p className="font-bold">Price: ${player.price}</p>
                <button className="btn">Choose Player</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
