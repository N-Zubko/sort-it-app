// import Spinner from '../components/Spinner';
import { Card } from '../components/Card';
import { wasteToSort } from '../components/ItemTypes';

const Learn = () => {
  return (
    <>
      <h2 className="text-center mb-2 mt-6 text-lg font-semibold">
        Learn How to Sort Waste
      </h2>
      <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-64">
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
