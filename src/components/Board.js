import { useState, useEffect } from 'react';
import useSound from 'use-sound';

import WasteItem from './WasteItem';
import BlueBin from './BlueBin';
import BlackBin from './BlackBin';
import GreenBin from './GreenBin';
import Landfill from './Landfill';
import Timer from './Timer';
import Modal from './Modal';

import { Context } from './Context.js';
import { wasteToSort } from './ItemTypes';

import BackgroundImage from '../pictures/background.jpg';
import DropSound from '../sounds/falling_garbage.wav';
import TadaSound from '../sounds/tada.wav';
import WasteSound from '../sounds/waste.wav';

let newWasteArray = [...wasteToSort];

function Board() {
  const [startSorting, setStartSorting] = useState(false);
  const [wasteDisplay, setWasteDisplay] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [playDrop] = useSound(WasteSound);
  const [playTada] = useSound(TadaSound);

  const reduceWasteDisplay = (id) => {
    const indexOfObject = newWasteArray.findIndex((object) => {
      return object.id === id;
    });
    if (indexOfObject > -1) {
      newWasteArray.splice(indexOfObject, 1);
    }
    setWasteDisplay([...newWasteArray]);
    return;
  };
  useEffect(() => {
    if (newWasteArray.length > 0) {
      setWasteDisplay([...newWasteArray]);
      if (startSorting) playDrop();
    } else if (newWasteArray.length === 0) {
      playTada();
      setShowModal(true);
      setStartSorting(false);
      newWasteArray = [...wasteToSort];
    } else {
      newWasteArray = [...wasteToSort];
      setStartSorting(false);
    }
  }, [itemAdded]);

  return (
    <Context.Provider
      value={{
        startSorting,
        setStartSorting,
        wasteDisplay,
        setWasteDisplay,
        itemAdded,
        setItemAdded,
        showModal,
        setShowModal,
        seconds,
        setSeconds,
      }}
    >
      <Modal />
      <div
        className="flex flex-col justify-center content-end h-screen w-screen"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Timer />
        {wasteDisplay.length > 0 && startSorting ? (
          <div className="flex flex-col items-center justify-center self-center w-40 h-40 rounded-full bg-slate-50 hover:bg-emerald-100 mb-28">
            <WasteItem
              key={wasteDisplay[0].id}
              url={wasteDisplay[0].url}
              id={wasteDisplay[0].id}
              wasteType={wasteDisplay[0].wasteType}
              name={wasteDisplay[0].name}
            />
            <span className="text-center mt-2 bg-white pl-2 pr-2">
              {wasteDisplay[0].name}
            </span>
          </div>
        ) : (
          <span className="inline-block align-middle text-center mt-2 bg-white h-14 mb-52">
            Click Start
          </span>
        )}
        <div className="flex flex-row flex-wrap justify-center content-end items-end">
          <div className="text-center mr-1 drop-shadow-lg">
            <Landfill
              wasteDisplay={wasteDisplay}
              reduceWasteDisplay={reduceWasteDisplay}
            />
            <span className="bg-white pl-2 pr-2">Landfill Drop-off</span>
          </div>
          <div className="text-center drop-shadow-lg">
            <BlueBin
              wasteDisplay={wasteDisplay}
              reduceWasteDisplay={reduceWasteDisplay}
            />
            <span className="bg-white pl-2 pr-2">Blue Cart</span>
          </div>
          <div className="text-center drop-shadow-lg">
            <BlackBin
              wasteDisplay={wasteDisplay}
              reduceWasteDisplay={reduceWasteDisplay}
            />
            <span className="bg-white pl-2 pr-2 ">Black Cart</span>
          </div>
          <div className="text-center drop-shadow-lg">
            <GreenBin
              wasteDisplay={wasteDisplay}
              reduceWasteDisplay={reduceWasteDisplay}
            />
            <span className="bg-white pl-2 pr-2">Green Cart</span>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default Board;
