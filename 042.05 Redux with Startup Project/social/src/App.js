import { Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/Product/CreateProduct";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "./redux/product/action";
import EditProduct from "./pages/Product/EditProduct";

function App() {

  const dispatch = useDispatch();
  
// 0000 https://www.youtube.com/watch?v=XmcViFMk9V8&list=PLVAkv8bX85N-oaEI8jGJcmNKBd6yc9N-M&index=131
  useEffect(() => {

    dispatch(getAllProduct())

  },[dispatch])

  return (
    <>

      <Routes>
        <Route path="/" element={ <Shop /> } />
        <Route path="/admin/product" element={ <Product /> } />
        <Route path="/admin/product/create" element={ <CreateProduct /> } />
        <Route path="/admin/product/edit" element={ <EditProduct /> } />
      </Routes>

    </>
  );
}

export default App;
