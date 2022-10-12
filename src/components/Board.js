import WasteItem from './WasteItem';
import BlueBin from './BlueBin';
import BlackBin from './BlackBin';
import GreenBin from './GreenBin';
import Landfill from './Landfill';
import { wasteToSort } from './ItemTypes';
import { useState, useEffect, memo } from 'react';

function Board() {
  const [wasteDisplay, setWasteDisplay] = useState([...wasteToSort]);
  // console.log('WASTE TO SORT', wasteToSort);

  const reduceWasteDisplay = (id) => {
    const indexOfObject = wasteToSort.findIndex((object) => {
      return object.id === id;
    });
    if (indexOfObject > -1) {
      wasteToSort.splice(indexOfObject, 1);
    }
    // console.log('wasteDisplay length is ', wasteDisplay.length);
    console.log('REDUCE');
    console.log('new wasteToSort', wasteToSort);
    setWasteDisplay([...wasteToSort]);
    return;
  };

  console.log('wasteDisplay outside check :', wasteDisplay.length);

  useEffect(() => {
    console.log('useEffect used');
    setWasteDisplay([...wasteToSort]);
  }, []);

  return (
    <>
      <div className="Pictures">
        {wasteDisplay.length > 0 && (
          <WasteItem
            key={wasteDisplay[0].id}
            url={wasteDisplay[0].url}
            id={wasteDisplay[0].id}
            wasteType={wasteDisplay[0].wasteType}
            description={wasteDisplay[0].description}
          />
        )}
      </div>
      <div className="bin-container" style={{ display: 'flex', gap: '2rem' }}>
        <BlueBin
          wasteDisplay={wasteDisplay}
          reduceWasteDisplay={reduceWasteDisplay}
        />
        <BlackBin
          wasteDisplay={wasteDisplay}
          reduceWasteDisplay={reduceWasteDisplay}
        />
        <GreenBin
          wasteDisplay={wasteDisplay}
          reduceWasteDisplay={reduceWasteDisplay}
        />
        <Landfill
          wasteDisplay={wasteDisplay}
          reduceWasteDisplay={reduceWasteDisplay}
        />
      </div>
    </>
  );
}

export default Board;
