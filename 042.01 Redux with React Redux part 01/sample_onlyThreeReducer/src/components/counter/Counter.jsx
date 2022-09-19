import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    const {counter} = useSelector(state => state);
    const dispatch = useDispatch()

  return (
    <>

    <div className="container  ">
        <div className="row  justify-content-center align-items-center">
            <div className="col-md-4 my-5">
                <div className="card counter ">
                    <div className="card-body">
                        <h2>{counter}</h2>

                    </div>
                </div>
            </div>
            <div className="col-md-2 my-5">
                <div className="card counter ">
                    <div className="card-body">
                        <button onClick={() => dispatch({type : "INCREMENT"}) } className='btn btn-success'>++</button> &nbsp;
                        <button onClick={() => dispatch({type : "DECREMENT"}) } className='btn btn-danger'>--</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Counter