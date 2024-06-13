import './App.css';
import{ BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import FoodPage from './pages/FoodPage';
import AboutPage from './pages/AboutPage';
import FoodListPage from './pages/FoodListPage';
import Callback from './components/Callback';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/food/:foodId" element={<FoodPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/foodlist" element={<FoodListPage />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
