import "./App.css";
import { Suspense, useState } from "react";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import Navbar from "./Components/Navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [toggle, setToggle] = useState(true)

  const playersPromise = fetchPlayers()
  return (
    <>
      <Navbar></Navbar>


      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Available Players</h1>

        <div className="font-semibold">
          <button onClick={()=> setToggle(true)} className={`border-r-0 rounded-l-2xl px-5 py-3 border-1 border-gray-400 ${toggle===true?"bg-[#E7FE29]":''} `}>Available</button>
          <button onClick={()=> setToggle(false)} className={`border-l-0 rounded-r-2xl px-5 py-3 border-1 border-gray-400 ${toggle === false?"bg-[#E7FE29]":''}`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true?<Suspense fallback={<span className="loading loading-bars loading-xl"></span>} >
        <AvailablePlayers playersPromise={playersPromise} ></AvailablePlayers>
      </Suspense> :  <SelectedPlayers></SelectedPlayers>
      }

      

     
    </>
  );
}

export default App;
