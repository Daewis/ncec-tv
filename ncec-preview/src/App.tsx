import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProgramsPage from './pages/Programs';
import LocationsPage from './pages/Locations';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:slug" element={<ProgramsPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/" element={<LocationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}