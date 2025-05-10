import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Five from './component/ToggleSwitch';
import One from './component/CounterApp';
import Two from './component/ShowUserInput';
import Four from './component/ListItems';
import Six from './component/Fetch';
import Project from './component/Project';
import Seven from './component/Timer';
import Eight from './component/Todo';
import Nine from './component/ChangeBG';
import Ten from './component/RandomQuote';
import Eleven from './component/UploadImage';
import Twelve from './component/Login';
import Thirteen from './component/WeatherApp';
import Fourteen from './component/ColorPicker';
import Fifteen from './component/DarkMode';
import Fitteen from './component/Fitteen';
import { ThemeProvider } from './component/Theme';  // Import the ThemeProvider
import CartProvider from './component/CartContext';
import Sixteen from './component/AddCart';
import Cart from './component/Cart';

function App() {
  const item = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];
  
  return (
    // Wrap the entire app in ThemeProvider
    <CartProvider>
    <ThemeProvider>  
      <Router>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          {/* <Route path="/four" element={<Four />} /> */}
          <Route path="/five" element={<Five />} />
          {/* <Route path="/six" element={<Six />} /> */}
          <Route path="/seven" element={<Seven />} />
          <Route path="/eight" element={<Eight />} />
          <Route path="/nine" element={<Nine />} />
          <Route path="/ten" element={<Ten />} />
          <Route path="/eleven" element={<Eleven />} />
          <Route path="/twelve" element={<Twelve />} />
          <Route path="/thirteen" element={<Thirteen items={item}/>} />
          <Route path="/fourteen" element={<Fourteen />} />
          <Route path="/fifteen" element={<Fitteen />} />
          <Route path="/sixteen" element={<Sixteen />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </CartProvider>
  );
}

export default App;
