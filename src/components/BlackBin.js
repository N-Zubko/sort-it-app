import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { wasteToSort, ItemTypes } from './ItemTypes';
import WasteItem from './WasteItem';

export default function BlueBin({ reduceWasteDisplay, wasteDisplay }) {
  const [blackBin, setBlackBin] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'garbage',
    drop: (item) => addItemToBin(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBin = (id) => {
    const toSort = wasteDisplay.filter((picture) => id === picture.id);
    reduceWasteDisplay(id);
    // show all items added
    setBlackBin((board) => [...board, toSort[0]]);

    //show only one
    // setBlackBin([toSort[0]]);
  };

  return (
    <div
      className="blueBin"
      ref={drop}
      style={{
        backgroundColor: 'black',
        color: 'white',
        width: '8rem',
        height: '12rem',
        marginTop: '10rem',
        textAlign: 'center',
        lineHeight: '2em',
      }}
    >
      {blackBin.map((pic) => {
        return (
          <WasteItem
            key={pic.id}
            url={pic.url}
            id={pic.id}
            wasteType={pic.wasteType}
            description={pic.description}
          />
        );
      })}
    </div>
  );
}
