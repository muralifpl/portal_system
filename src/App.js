// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/LandingPage'
import Details from './components/Details'


function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/' element={<Landing />} >
</Route>
<Route path="/Details" index element={<Details />} />
</Routes>


</BrowserRouter>


    </div>
  );
}

export default App;
