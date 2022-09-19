
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import Colors from './components/colors/Colors';
import Counter from './components/counter/Counter';
import Foods from './components/foods/Foods';
import SingleFood from './components/foods/SingleFood';





function App() {

  const {color} = useSelector(state => state)


  return (
    <>
      <div style={{background : color}} className="main-container">
        <Counter/>
        <Colors/>
        <Foods/>
        <SingleFood/>
      </div>
    </>
  );
}

export default App;
