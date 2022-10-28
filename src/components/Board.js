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
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

import Spinner from './Spinner';
import BackgroundImage from '../pictures/background.jpg';
import TadaSound from '../sounds/tada.wav';
import WasteSound from '../sounds/waste.wav';

const GET_WASTE = loader('../graphql/waste.graphql');

function Board() {
  const [startSorting, setStartSorting] = useState(false);
  const [showWasteDisplay, setShowWasteDisplay] = useState(false);
  const [wasteDisplay, setWasteDisplay] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);

  const [playDrop] = useSound(WasteSound);
  const [playTada] = useSound(TadaSound);
  const { loading, error, data } = useQuery(GET_WASTE);

  useEffect(() => {
    if (startSorting && data) {
      setWasteDisplay(data.wasteToSorts.edges);
      setShowWasteDisplay(true);
    }
    if ((loading && startSorting) || error) setShowSpinner(true);
  }, [startSorting, data, loading, error]);

  useEffect(() => {
    if (itemAdded && count < wasteDisplay.length - 1) {
      setCount((count) => count + 1);
      playDrop();
    }
    if (itemAdded && count === wasteDisplay.length - 1) {
      setCount(count);
      setStartSorting(false);
      setShowWasteDisplay(false);
      playTada();
      setShowModal(true);
      setCount(0);
    }
  }, [itemAdded]);

  return (
    <Context.Provider
      value={{
        startSorting,
        setStartSorting,
        itemAdded,
        setItemAdded,
        showModal,
        setShowModal,
        seconds,
        setSeconds,
        count,
        setCount,
        showWasteDisplay,
        setShowWasteDisplay,
      }}
    >
      <Modal />
      <div
        className="flex flex-col flex-wrap items-center justify-center h-screen w-screen"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Timer />
        {showSpinner && <Spinner />}
        {wasteDisplay.length > 0 && showWasteDisplay ? (
          <div className="flex flex-col items-center justify-center self-center w-40 h-40 rounded-full bg-slate-50 hover:bg-emerald-100 mb-28">
            <WasteItem
              key={wasteDisplay[count].node.objectId}
              url={wasteDisplay[count].node.image.url}
              id={wasteDisplay[count].node.id}
              wasteType={wasteDisplay[count].node.wasteType}
              name={wasteDisplay[count].node.name}
            />
            <span className="text-center mt-2 bg-white pl-2 pr-2">
              {wasteDisplay[count].node.name}
            </span>
          </div>
        ) : (
          <span className="inline-block align-middle text-center mt-2 pt-2 pb-2 pl-36 pr-36 bg-white h-14 mb-52">
            Click Start
          </span>
        )}
        <div className="flex flex-row flex-wrap justify-center content-end items-end">
          <div className="text-center mr-1 drop-shadow-lg">
            <Landfill />
            <span className="bg-white pl-2 pr-2">Landfill Drop-off</span>
          </div>
          <div className="text-center drop-shadow-lg">
            <BlueBin />
            <span className="bg-white pl-2 pr-2">Blue Cart</span>
          </div>
          <div className="text-center drop-shadow-lg">
            <BlackBin />
            <span className="bg-white pl-2 pr-2 ">Black Cart</span>
          </div>
          <div className="text-center drop-shadow-lg">
            <GreenBin />
            <span className="bg-white pl-2 pr-2">Green Cart</span>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default Board;
