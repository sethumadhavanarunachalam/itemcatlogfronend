import logo from './logo.svg';
import './App.css';
import ItemCatlog from "./components/ItemCatlog/ItemCatlog.js"
import Welcome from './components/welcome/Welcome.js';
import { Route,Routes, useNavigate } from 'react-router-dom'
import Cars from './components/Cars/Cars.js';
import Bikes from './components/Bikes/Bikes.js';
import Mobile from './components/Mobile/Mobile.js';
import Laptop from './components/Laptops/Laptop.js';
import SmartWatch from './components/Smartwatch/SmartWatch.js';
import AddInputcars from './AddItems/AddCarItem/AddInputcars.js';
import AddInputbike from './AddItems/AddBikeItem/AddInputbike.js'
import AddInputlaptop from './AddItems/AddLaptopItem/AddInputlaptops.js'
import AddInputMobile from './AddItems/AddMobileItem/AddInputMobile.js';
import AddInputSmartwatch from './AddItems/AddSmartWatchItem/AddInputSmartwatch.js'
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      {/* <button className='btnwelcome' onClick={()=>navigate("/itemcatlog")}>Click</button> */}
      <Routes>
        <Route path="/"  element={<Welcome/>}/>
        <Route path="/itemcatlog"  element={<ItemCatlog/>}/>
        <Route path="/cars"  element={<Cars/>}/>
        <Route path="/bikes"  element={<Bikes/>}/>
        <Route path="/mobiles"  element={<Mobile/>}/>
        <Route path="/laptops"  element={<Laptop/>}/>
        <Route path="/smartwatch"  element={<SmartWatch/>}/>
        <Route path="/addinputcar"  element={<AddInputcars/>}/>
        <Route path="/addinputbike"  element={<AddInputbike />}/>
        <Route path="/addinputlaptop"  element={<AddInputlaptop />}/>
        <Route path="/addinputmobile"  element={<AddInputMobile />}/>
        <Route path="/addinputsmartwatch"  element={<AddInputSmartwatch />}/>
       </Routes>
    </div>
  );
}

export default App;
