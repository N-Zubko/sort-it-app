import { useState, useContext } from 'react';
import { useDrop } from 'react-dnd';
import { wasteToSort, ItemTypes } from './ItemTypes';
import WasteItem from './WasteItem';
import { Context } from './Context';

import TruckImage from '../pictures/truck_.png';

const style = {
  // width: '8rem',
  height: '7rem',
};

export default function Landfill({ reduceWasteDisplay, wasteDisplay }) {
  const [landfill, setLandfill] = useState([]);
  const { itemAdded, setItemAdded } = useContext(Context);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'landfill',
    drop: (item) => addItemToBin(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBin = (id) => {
    setItemAdded(true);
    const toSort = wasteDisplay.filter((picture) => id === picture.id);
    reduceWasteDisplay(id);
    // show all items added
    setLandfill((board) => [...board, toSort[0]]);
    setTimeout(() => {
      setItemAdded(false);
    }, 300);
    //show only one
    // setLandfill([toSort[0]]);
  };

  return (
    <img
      src={TruckImage}
      alt="Truck for waste to be dropped at landfills"
      style={style}
      ref={drop}
      className={itemAdded && 'hover:scale-125'}
    />
    // <div className="bin" ref={drop} style={style}>
    //   {/* {landfill.map((pic) => {
    //     return (
    //       <WasteItem
    //         key={pic.id}
    //         url={pic.url}
    //         id={pic.id}
    //         wasteType={pic.wasteType}
    //         description={pic.description}
    //       />
    //     );
    //   })} */}
    // </div>
  );
}
