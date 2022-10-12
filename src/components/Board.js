import WasteItem from './WasteItem';
import BlueBin from './BlueBin';
import BlackBin from './BlackBin';
import GreenBin from './GreenBin';
import Landfill from './Landfill';
import { wasteToSort } from './ItemTypes';
import { useState, useEffect } from 'react';

function Board() {
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

  return (
    <>
      {wasteDisplay.length > 0 && (
        <div
          className="flex justify-center content-end items-end h-24 mb-3"
          // style={{
          //   display: 'flex',
          //   justifyContent: 'center',
          //   marginBottom: '5rem',
          // }}
        >
          <WasteItem
            key={wasteDisplay[0].id}
            url={wasteDisplay[0].url}
            id={wasteDisplay[0].id}
            wasteType={wasteDisplay[0].wasteType}
            name={wasteDisplay[0].name}
          />
          <p className="text-center">{wasteDisplay[0].name}</p>
        </div>
      )}

      <div className="flex flex-row flex-wrap justify-center content-end items-end">
        <div className="text-center">
          <BlueBin
            wasteDisplay={wasteDisplay}
            reduceWasteDisplay={reduceWasteDisplay}
          />
          <p>Blue Cart</p>
        </div>
        <div className="text-center">
          <BlackBin
            wasteDisplay={wasteDisplay}
            reduceWasteDisplay={reduceWasteDisplay}
          />
          <p>Black Cart</p>
        </div>
        <div className="text-center">
          <GreenBin
            wasteDisplay={wasteDisplay}
            reduceWasteDisplay={reduceWasteDisplay}
          />
          <p>Green Cart</p>
        </div>
        <div className="text-center ml-2">
          <Landfill
            wasteDisplay={wasteDisplay}
            reduceWasteDisplay={reduceWasteDisplay}
          />
          <p>Landfill</p>
        </div>
      </div>
    </>
  );
}

export default Board;
