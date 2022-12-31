import { Route, Routes } from 'react-router-dom';
import './App.css';
import RoutePeotected from './components/RoutePeotected';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<RoutePeotected />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<Pokemon />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
