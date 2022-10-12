import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { wasteToSort, ItemTypes } from './ItemTypes';
import WasteItem from './WasteItem';

export default function GreenBin({ reduceWasteDisplay, wasteDisplay }) {
  const [greenBin, setGreenBin] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'compost',
    drop: (item) => addItemToBin(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBin = (id) => {
    const toSort = wasteDisplay.filter((picture) => id === picture.id);
    reduceWasteDisplay(id);
    // show all items added
    setGreenBin((board) => [...board, toSort[0]]);

    //show only one
    // setGreenBin([toSort[0]]);
  };

  return (
    <div
      className="blueBin"
      ref={drop}
      style={{
        backgroundColor: 'green',
        color: 'white',
        width: '8rem',
        height: '12rem',
        marginTop: '10rem',
        textAlign: 'center',
        lineHeight: '2em',
      }}
    >
      {greenBin.map((pic) => {
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
