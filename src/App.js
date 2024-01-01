import React from 'react';
import Widget from './component/firstWidget';
import First from './component/firstWidgetA';
import Dirty from './component/widget';
import Fregrent from './component/fregrant';
import LastWidget from './component/LastWidget';
import SecondWidget from './component/secondWidget';
import ThirdWidget from './component/thirdWidget';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route path="/" element={<Widget />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<SecondWidget />} />
        <Route path="/third" element={<ThirdWidget />} />
        <Route path="/dirty" element={<Dirty />} />
        <Route path="/fregrant" element={<Fregrent />} />
        <Route path="/lastWidget" element={<LastWidget />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
