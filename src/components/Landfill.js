import { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { Context } from './Context';

import TruckImage from '../pictures/truck_.png';

const style = {
  height: '7rem',
};

export default function Landfill() {
  const { itemAdded, setItemAdded } = useContext(Context);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'landfill',
    drop: () => addItemToBin(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBin = () => {
    setItemAdded(true);
    setTimeout(() => {
      setItemAdded(false);
    }, 300);
  };

  return (
    <img
      src={TruckImage}
      alt="Truck for waste to be dropped off at landfills"
      style={style}
      ref={drop}
      className={itemAdded && 'hover:scale-125'}
    />
  );
}
