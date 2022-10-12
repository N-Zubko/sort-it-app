import { useDrag } from 'react-dnd';

const style = {
  width: '4em',
  height: '4em',
};

function WasteItem({ id, name, description, url, wasteType }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: wasteType,
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={url}
      id={id}
      alt={name}
      style={{ ...style, opacity: isDragging && 0.3 }}
    />
  );
}

export default WasteItem;
