import { gql } from '@apollo/client';
// import { useState, useEffect } from 'react';
// import { useQuery } from '@apollo/client';

export const GET_WASTE = gql`
  query Waste {
    wasteToSorts {
      edges {
        node {
          objectId
          name
          wasteType
          image {
            url
          }
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
