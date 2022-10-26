import { gql } from '@apollo/client';

export const GET_WASTE = gql`
  query Waste {
    wasteToSorts {
      edges {
        node {
          objectId
          name
          description
          wasteType
        }
      }
    }
  }
`;

export const GET_WASTE_DETAILED = gql`
  query Waste {
    wasteToSorts {
      edges {
        node {
          objectId
          name
          description
          wasteType
          image {
            url
          }
        }
      }
    }
  }
`;
