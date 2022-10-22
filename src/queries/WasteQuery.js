import { gql, useQuery } from '@apollo/client';
// import { useAuthenticated } from '@nhost/react'

const GET_WASTE = gql`
  query Waste {
    waste {
      id
      description
    }
  }
`;

export const WasteQuery = () => {
  //   const isAuthenticated = useAuthenticated()
  const { loading, data, error } = useQuery(GET_WASTE);

  if (loading) {
    return <div>Loading...</div>;
  }

  //   if (!isAuthenticated) {
  //     return <div>You must be authenticated to see this page</div>
  //   }

  if (error) {
    return <div>Error in the query {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data?.waste.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
