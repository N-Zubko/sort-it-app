import { gql, useQuery } from '@apollo/client';

const GET_WASTE = gql`
  query Waste {
    wasteToSort {
      id
      name
      url
      wasteType
    }
  }
`;

// const GET_WASTE_DETAILED = gql`
//   query Waste {
//     wasteItem {
//       id
//       name
//       description
//       url
//       wasteType
//     }
//   }
// `;

export const WasteQuery = () => {
  const { loading, error, data } = useQuery(GET_WASTE);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error in the query: {error.message}</div>;

  let waste = data?.wasteToSort;
  console.log('waste received: ' + waste);

  return (
    <div>
      <ul>
        {waste.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
