import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import ShowPokemon from './components/homePageBottom';
import DetailInfo from './components/details';

const App = () => {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowPokemon />} />
        <Route path="/detail/:id" element={<DetailInfo data={location.state} />} />
      </Routes>
    </>
  );
};

export default App;
