import { Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/Product/CreateProduct";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import './App.css';
import axios from "axios";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    axios.get('http://localhost:5050/api/v1/product')
    .then(res => {
  
    })
    .catch(error => {
      console.log(error);
    })
  })

  return (
    <>

      <Routes>
        <Route path="/" element={ <Shop /> } />
        <Route path="/admin/product" element={ <Product /> } />
        <Route path="/admin/product/create" element={ <CreateProduct /> } />
      </Routes>

    </>
  );
}

export default App;
