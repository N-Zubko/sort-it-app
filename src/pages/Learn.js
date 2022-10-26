import { Card } from '../components/Card';
import { useQuery } from '@apollo/client';
import { GET_WASTE_DETAILED } from '../graphql/WasteQuery';
import Spinner from '../components/Spinner';

const Learn = () => {
  const { loading, error, data } = useQuery(GET_WASTE_DETAILED);

  if (loading) return <Spinner />;

  if (error) return `Error! ${error}`;

  return (
    <>
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
    </>
  );

  //   if (data) {
  //     setLoad(data.wasteToSorts.edges);
  //   }
  // }, [data]);

  // return (
  //   <>
  //     <h2 className="text-center mb-2 mt-6 text-lg font-semibold">
  //       Learn How to Sort Waste
  //     </h2>
  //     <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-64">
  //       {load.length > 1 ? (
  //         load.map((item) => (
  //           <Card
  //             key={item.node.id}
  //             id={item.node.id}
  //             name={item.node.name}
  //             description={item.node.description}
  //             url={item.node.image.url}
  //             wasteType={item.node.wasteType}
  //           />
  //         ))
  //       ) : (
  //         <Spinner />
  //       )}
  //     </div>
  //   </>
};

export default Learn;
