// import Spinner from '../components/Spinner';
import { Card } from '../components/Card';
import { wasteToSort } from '../components/ItemTypes';

const Learn = () => {
  return (
    <>
      <h2 className="text-center mb-2 text-lg">Learn How to Sort Waste</h2>
      <div className="grid grid-rows-4 grid-flow-col gap-4 ml-5 mr-5">
        {wasteToSort.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            url={item.url}
            wasteType={item.wasteType}
          />
        ))}
      </div>
    </>
  );
};

export default Learn;
