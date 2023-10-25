
import './App.css';
import Header from './components/header/Header';
import CartScreen from './screens/CartScreen/CartScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomeScreen cartButton={true} />} />
      <Route path='/cart' element={<CartScreen cartButton={false} />} />
    </Routes>
  );
}

export default App;
