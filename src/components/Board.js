import { useState, useEffect } from 'react';

import WasteItem from './WasteItem';
import BlueBin from './BlueBin';
import BlackBin from './BlackBin';
import GreenBin from './GreenBin';
import Landfill from './Landfill';
import Timer from './Timer';
import { Context } from './Context.js';

import { wasteToSort } from './ItemTypes';
import BackgroundImage from '../pictures/background.jpg';

const newWasteArray = [...wasteToSort];

//TODO: when the array is empty, the whole timer should stop
//TODO: when Start is clicked, the array and the bins are refreshed
function Board() {
  const [startSorting, setStartSorting] = useState(false);
  const [wasteDisplay, setWasteDisplay] = useState([...wasteToSort]);
  const reduceWasteDisplay = (id) => {
    const indexOfObject = wasteToSort.findIndex((object) => {
      return object.id === id;
    });
    if (indexOfObject > -1) {
      wasteToSort.splice(indexOfObject, 1);
    }
    setWasteDisplay([...wasteToSort]);
    return;
  };

  useEffect(() => {
    setWasteDisplay([...wasteToSort]);
  }, []);

  // useEffect(() => {
  //   setWasteDisplay(newWasteArray);
  // }, [wasteDisplay.length === 0]);

  return (
    <Context.Provider
      value={{ startSorting, setStartSorting, wasteDisplay, setWasteDisplay }}
    >
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
        ) : !startSorting ? (
          <span className="inline-block align-middle text-center mt-2 bg-white h-14 mb-52">
            Click Start
          </span>
        ) : (
          <span className="inline-block align-middle text-center mt-2 bg-white h-14 mb-52">
            ALL DONE!
          </span>
        )}
        <div className="flex flex-row flex-wrap justify-center content-end items-end">
          <div className="text-center mr-1 drop-shadow-lg">
            <Landfill
              wasteDisplay={wasteDisplay}
              reduceWasteDisplay={reduceWasteDisplay}
            />
            <span className="bg-white pl-2 pr-2">Landfill drop-off</span>
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
