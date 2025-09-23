import "./App.css";
import { Suspense, useState } from "react";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newsletter from "./Components/NewsLatter/NewsLatter";
import Footer from "./Components/footer/footer";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(1200000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (delPlayer) => {
    const filteredData = purchasedPlayers.filter(
      (plyName) => plyName["player-name"] !== delPlayer["player-name"]
    );

    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + delPlayer.price);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4">
        <h1 className="font-bold text-2xl">
          {toggle
            ? "Available Players"
            : `Selected Players (${purchasedPlayers.length}/12)`}
        </h1>

        <div className="font-semibold flex">
          <button
            onClick={() => setToggle(true)}
            className={`border-r-0 rounded-l-2xl px-5 py-3 border-1 border-gray-400 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            } `}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border-l-0 rounded-r-2xl px-5 py-3 border-1 border-gray-400 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          setToggle={setToggle}
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
      <div>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        transition={Slide} // safe transition
        theme="colored"
      />
    </>
  );
}

export default App;
