import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { wasteToSort, ItemTypes } from './ItemTypes';
import WasteItem from './WasteItem';

const style = {
  backgroundColor: 'blue',
  color: 'white',
  width: '8rem',
  height: '12rem',
  maxHeight: 'fit-content',
  marginTop: '10rem',
  textAlign: 'center',
  lineHeight: '2em',
};

export default function BlueBin({ reduceWasteDisplay, wasteDisplay }) {
  const [blueBin, setBlueBin] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'recycle',
    drop: (item) => addItemToBin(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBin = (id) => {
    const toSort = wasteDisplay.filter((picture) => id === picture.id);
    reduceWasteDisplay(id);

    // show all items added
    setBlueBin((board) => [...board, toSort[0]]);

    //show only one
    // setBlueBin([toSort[0]]);
  };

  return (
    <div className="blueBin" ref={drop} style={{ ...style }}>
      {blueBin.map((pic) => {
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
