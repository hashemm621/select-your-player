import React, { useState } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/flag.png";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  availableBalance,
  setAvailableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedBtn = (playerData) => {
    if (purchasedPlayers.length > 12) {
      toast.warning("You have 12 players already selected");
      return;
    }
    if (availableBalance < playerData.price) {
      toast.warning("You have not Enough Balance");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - player.price);
    setPurchasedPlayers([...purchasedPlayers, player]);
    toast.success("Player Purchased !");
  };

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
          <button
            disabled={isSelected}
            onClick={() => handleSelectedBtn(player)}
            className="btn"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
