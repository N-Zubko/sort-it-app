import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout';
import PlayPage from './pages/PlayPage';
import About from './pages/About';
import Learn from './pages/Learn';

import { NhostClient, NhostReactProvider } from '@nhost/react';

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION,
});

function App() {
  return (
    <NhostReactProvider nhost={nhost}>
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
    </NhostReactProvider>
  );
}

export default App;
