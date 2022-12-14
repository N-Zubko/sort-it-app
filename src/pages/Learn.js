import { Card } from '../components/Card';
import { useQuery } from '@apollo/client';
import Spinner from '../components/Spinner';
import { loader } from 'graphql.macro';

const GET_WASTE_DETAILED = loader('../graphql/wasteDetailed.graphql');

const Learn = () => {
  const { loading, error, data } = useQuery(GET_WASTE_DETAILED);

  if (loading) return <Spinner />;

  if (error) return `Error! ${error}`;

  return (
    <>
      <h2 className="text-center mb-2 mt-6 text-lg font-semibold">
        Learn How to Sort Waste
      </h2>
      <div className="grid grid-cols-1 sm:gap-2 md:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-64">
        {data.wasteToSorts.edges.map((item) => (
          <Card
            key={item.node.id}
            id={item.node.id}
            name={item.node.name}
            description={item.node.description}
            url={item.node.image.url}
            wasteType={item.node.wasteType}
          />
        ))}
      </div>
    </>
  );
};

export default Learn;
