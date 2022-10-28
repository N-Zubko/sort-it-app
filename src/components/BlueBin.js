import { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { Context } from './Context';

import BluebinImage from '../pictures/blue-bin_.png';

const style = {
  height: '12rem',
};

export default function BlueBin() {
  const { itemAdded, setItemAdded } = useContext(Context);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'recycle',
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
      src={BluebinImage}
      alt="Blue cart for recyclable waste"
      ref={drop}
      style={style}
      className={itemAdded && 'hover:scale-125'}
    />
  );
}
