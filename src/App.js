import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;