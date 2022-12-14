import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { deleteProduct, getAllProduct, getSingleProduct } from '../../redux/product/action';
import SingleProductModal from '../Shop/SingleProductModal';
import EditProduct from './EditProduct';
import './Product.css';

const Product = () => {
    // edit modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [single, setSingle] = useState(false);
    const dispatch = useDispatch()
    
    const handleSingleShow = (id) => {
        dispatch(getSingleProduct(id))
        setSingle(true)
    };
    const handleSingleHide = () => setSingle(false);
    // handle ProductDelete 
    const handleProductDelete = (e, id) => {
        e.preventDefault()

        // 
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                dispatch(deleteProduct(id))
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    // handle Product Edit 
    const handleSingleEdit = (e, id )  => {
        e.preventDefault()

        dispatch(getSingleProduct(id))
        handleShow()

    }
    const {products, error, skileton} = useSelector(state => state.product)

    useEffect(()=>{
        dispatch(getAllProduct())
    },[dispatch])

  return (
    <>
        <EditProduct single={  show } handleSingleHide =  { handleClose }  />
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
                                products && 
                                
                                products?.map((data, index) => 
                                    <tr key={data._id}>
                                        <td>{index + 1 }</td>
                                        <td>{data.name}</td>
                                        <td>{data.regular_price}</td>
                                        <td>{data.sale_price}</td>
                                        <td>{data.stock}</td>
                                        <td><img style={{height: '30px', width:'40px', objectFit: 'cover'}} src={`http://localhost:5050/images/product/${data.photo}`} /></td>
                                        <td>
                                            <a onClick={() => handleSingleShow(data._id)} className='text-info' href="#"><i className='fa fa-eye'></i></a>
                                            <a onClick={(e) => handleSingleEdit(e, data._id)} className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                            <a onClick={(e) => handleProductDelete(e, data._id)} className='text-danger' href="#"><i className='fa fa-trash'></i></a>
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