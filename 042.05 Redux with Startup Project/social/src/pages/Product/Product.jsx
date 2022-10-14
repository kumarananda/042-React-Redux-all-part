import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleProduct } from '../../redux/product/action';
import SingleProductModal from '../Shop/SingleProductModal';
import './Product.css';

const Product = () => {
    const [single, setSingle] = useState(false);
    const dispatch = useDispatch()
    
    const handleSingleShow = (id) => {
        dispatch(getSingleProduct(id))
        setSingle(true)
    };
    const handleSingleHide = () => setSingle(false);

    const {products, error, skileton} = useSelector(state => state.product)

    // console.log(products);

  return (
    <>
        <SingleProductModal single={  single } handleSingleHide =  { handleSingleHide }  />
        <div className='container my-5'>
        <div className="row justify-content-center">
            <div className="col-md-10">
            <Link className='btn btn-primary' to="/admin/product/create">Add new</Link> &nbsp;
            <Link className='btn btn-warning' to="/">View Shop</Link>
                <br />
                <br />
                <div className="card product shadow-sm">
                    <div className="card-body">
                    <h2>All products</h2>
                    <hr />
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Regular Price</th>
                                <th>Sale Price</th>
                                <th>Stock</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((data, index) => 
                                    <tr>
                                        <td>{index + 1 }</td>
                                        <td>{data.name}</td>
                                        <td>{data.regular_price}</td>
                                        <td>{data.sale_price}</td>
                                        <td>{data.stock}</td>
                                        <td><img src="https://www.bhphotovideo.com/images/images2500x2500/sony_ilce7sm3_b_alpha_a7s_iii_mirrorless_1577838.jpg" alt="" /></td>
                                        <td>
                                            <a onClick={() => handleSingleShow(data._id)} className='text-info' href="#"><i className='fa fa-eye'></i></a>
                                            <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                            <a className='text-danger' href="#"><i className='fa fa-trash'></i></a>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>

  )
};

export default Product;