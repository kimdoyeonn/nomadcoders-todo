import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Price from './routes/Price';
import ToDoList from './Components/ToDoList';

function Router() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Routes>
        {/* <Route path='/' element={<Coins />} />
        <Route path='/:coinId' element={<Coin />}>
          <Route path={`price`} element={<Price />} />
          <Route path={`chart`} element={<Chart />} />
        </Route> */}
        <Route path='/' element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
