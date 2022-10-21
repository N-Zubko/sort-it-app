import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
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
          {/* <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} /> */}
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <Layout />
              // </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="learn" element={<Learn />} />
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>
          {/* <Route path="about" element={<About />} />
          <Route path="learn" element={<Learn />} /> */}
        </Routes>
      </BrowserRouter>
      <Toaster />
    </NhostReactProvider>
  );
}

export default App;
