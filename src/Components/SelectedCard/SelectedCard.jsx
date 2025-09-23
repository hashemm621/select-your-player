import React from "react";
import deleteImg from "../../assets/Vector.png";

const SelectedCard = ({player,removePlayer}) => {

    const handleRemove= () =>{
        removePlayer(player)
    }

  return (
    <div className="mt-4 max-w-[1200px] mx-auto px-4">
      <div className="flex justify-between items-center shadow p-3">
        <div className="flex items-center">
          <img
            className="w-[50px] h-[50px] rounded-2xl"
            src={player['player-image']}
            alt=""
          />
          <div className="ml-4">
            <h2 className="font-semibold">{player['player-name']}</h2>
            <p className="text-gray-400">{player['playing-role']} </p>
          </div>
        </div>
        <div onClick={handleRemove}>
            <img src={deleteImg} alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default SelectedCard;
