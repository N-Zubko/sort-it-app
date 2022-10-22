import { useState } from 'react';
import Input from '../components/Input';
import Spinner from '../components/Spinner';
import { Card } from '../components/Card';
import { wasteToSort } from '../components/ItemTypes';

const Learn = () => {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 ml-5 mr-5">
      {wasteToSort.map((item) => (
        <Card
          id={item.id}
          name={item.name}
          description={item.description}
          img={item.url}
          wasteType={item.wasteType}
        />
      ))}
    </div>
  );
};

export default Learn;
