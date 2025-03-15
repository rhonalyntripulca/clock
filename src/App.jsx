import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LiveClock from "./components/LiveClock";

const App = () => {
  return (
    <div>
      <LiveClock />
    </div>
  );
};

export default App;
