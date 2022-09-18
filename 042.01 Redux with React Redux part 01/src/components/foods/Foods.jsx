import React from 'react'

const Foods = () => {
  return (
    <>
        <div className="container  ">
            <div className="row  justify-content-center align-items-center">
                <div className="col-md-3 my-5">
                    <div className="card counter ">
                        <img  class="card-img-top foodImg" src="..." style={{Height: `250px`}} alt="Card image"/>
                    </div>
                </div>
                <div className="col-md-3 my-5">
                    <div className="card counter ">
                        <div className="card-body">

                            <select className='form-control' name="" id="">
                                <option value="Alo">Alo</option>
                                <option value="Potol">Potol</option>
                                <option value="Lao">Lao</option>
                                <option value="Kumra">Kumra</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Foods