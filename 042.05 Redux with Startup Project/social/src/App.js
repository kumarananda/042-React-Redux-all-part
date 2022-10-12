import { Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/Product/CreateProduct";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import './App.css';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productFail, productRequest, productSuccess } from "./redux/product/action";

function App() {

  const dispatch = useDispatch();
  
// 31:00 https://www.youtube.com/watch?v=XmcViFMk9V8&list=PLVAkv8bX85N-oaEI8jGJcmNKBd6yc9N-M&index=131
  useEffect(() => {

    dispatch(productRequest())

    axios.get('http://localhost:5050/api/v1/product')
    .then(res => {
      dispatch(productSuccess(res.data))
    })
    .catch(error => {
      console.log(error);
      dispatch(productFail(error.message))
    })
  },[dispatch])

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
