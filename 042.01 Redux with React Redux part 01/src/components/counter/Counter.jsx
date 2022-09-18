import React from 'react'

const Counter = () => {
  return (
    <>

    <div className="container  ">
        <div className="row  justify-content-center align-items-center">
            <div className="col-md-4 my-5">
                <div className="card counter ">
                    <div className="card-body">
                        <h2>0</h2>

                    </div>
                </div>
            </div>
            <div className="col-md-2 my-5">
                <div className="card counter ">
                    <div className="card-body">
                        <button className='btn btn-success'>++</button> &nbsp;
                        <button className='btn btn-danger'>--</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Counter