import { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { Context } from './Context';

import BlackbinImage from '../pictures/black-bin_.png';

const style = {
  height: '12rem',
};

export default function BlueBin({}) {
  const { itemAdded, setItemAdded } = useContext(Context);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'garbage',
    drop: () => addItemToBin(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBin = () => {
    setItemAdded(true);
    console.log('ADDED!');
    setTimeout(() => {
      setItemAdded(false);
    }, 300);
  };

  return (
    <img
      src={BlackbinImage}
      alt="Black cart for garbage"
      ref={drop}
      style={style}
      className={itemAdded && 'hover:scale-125'}
    />
  );
}
