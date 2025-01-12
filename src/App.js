import React from 'react';
import './App.css';
import Header from './components/Header';
import PriceDisplay from './components/PriceDisplay';
import TrendingCoins from './components/TrendingCoins';
import YouMayAlsoLike from './components/YouMayAlsoLike';
import Footer from './components/Footer';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <Header />
      <PriceDisplay />
      <Chart />
      <TrendingCoins />
      <YouMayAlsoLike />
      <Footer />
    </div>
  );
}

export default App;
