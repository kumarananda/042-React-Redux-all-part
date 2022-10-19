import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const EditProduct = ({ single, handleSingleHide }) => {

    const {singleProduct} = useSelector(state => state.product)
    

  return (

        <Modal show={ single } onHide={ handleSingleHide } animation={ true } centered size='lg'> 
            <Modal.Header closeButton>
                <Modal.Title>Product Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="single-product">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`http://localhost:5050/images/product/${singleProduct.photo}`} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="single my-5">
                                {/* <h2>Sony A7s iii</h2> */}
                                <h2>{singleProduct.name}</h2>
                                <h3>$1200 </h3>
                                {
                                    !singleProduct.sale_price && <>
                                        <h3>Price : $ {singleProduct.regular_price}</h3>

                                    </>
                                }
                                {
                                    singleProduct.sale_price && <>
                                    <h3>Price : $ <s>{singleProduct.regular_price}</s></h3>
                                    <h3 style={{color:'green'}}>Sale Price : $ {singleProduct.sale_price}</h3>
                                    </> 
                                }
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste recusandae ipsa earum! Optio, placeat eum.</p>
                                <button className='btn btn-lg btn-dark'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>


  )
};

export default EditProduct;