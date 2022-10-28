import { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { Context } from './Context';

import GreenbinImage from '../pictures/green-bin_.png';

const style = {
  height: '12rem',
};

export default function GreenBin() {
  const { itemAdded, setItemAdded } = useContext(Context);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'compost',
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
      src={GreenbinImage}
      alt="green cart for compost"
      ref={drop}
      style={style}
      className={itemAdded && 'hover:scale-125'}
    />
  );
}
