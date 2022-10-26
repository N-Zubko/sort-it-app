import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout';
import PlayPage from './pages/PlayPage';
import About from './pages/About';
import Learn from './pages/Learn';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// URI for graphql API on back4app
const httpLink = createHttpLink({
  uri: 'https://parseapi.back4app.com/graphql',
});

const APPLICATION_ID = process.env.REACT_APP_APPLICATION_ID;
const MASTER_KEY = process.env.REACT_APP_MASTER_KEY;
const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

const headersLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'X-Parse-Application-Id': APPLICATION_ID,
      'X-Parse-Master-Key': MASTER_KEY,
      'X-Parse-REST-API-Key': REST_API_KEY,
    },
  };
});

const client = new ApolloClient({
  link: headersLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PlayPage />} />
              <Route path="about" element={<About />} />
              <Route path="learn" element={<Learn />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ApolloProvider>
    </>
  );
}

export default App;
