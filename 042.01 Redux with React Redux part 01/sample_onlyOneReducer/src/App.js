
import React,{ useState } from 'react';
import Colors from './components/colors/Colors';
import Counter from './components/counter/Counter';
import Foods from './components/foods/Foods';





function App() {




  return (
    <>
      <div className="main-container">
        <Counter/>
        <Colors/>
        <Foods/>
      </div>
    </>
  );
}

export default App;
