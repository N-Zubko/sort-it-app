import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { wasteToSort, ItemTypes } from './ItemTypes';
import WasteItem from './WasteItem';

const style = {
  backgroundColor: 'salmon',
  color: 'white',
  width: '8rem',
  height: '12rem',
  marginTop: '10rem',
  textAlign: 'center',
  lineHeight: '2em',
};

export default function Landfill({ reduceWasteDisplay, wasteDisplay }) {
  const [landfill, setLandfill] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'landfill',
    drop: (item) => addItemToBin(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBin = (id) => {
    const toSort = wasteDisplay.filter((picture) => id === picture.id);
    reduceWasteDisplay(id);
    // show all items added
    setLandfill((board) => [...board, toSort[0]]);

    //show only one
    // setLandfill([toSort[0]]);
  };

  return (
    <div className="bin" ref={drop} style={style}>
      {landfill.map((pic) => {
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
