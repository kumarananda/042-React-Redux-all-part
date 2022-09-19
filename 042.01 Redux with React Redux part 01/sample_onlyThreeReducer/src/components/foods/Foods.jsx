import React from 'react'
import { useDispatch, useSelector } from 'react-redux'




import assets from "../../assets/Kodu.bmp"



const Foods = () => {

    const dispatch = useDispatch()
    const {food} = useSelector(state => state)



  return (
    <>
        <div className="container  ">
            <div className="row  justify-content-center align-items-center">
                <div className="col-md-3 my-5">
                    <div className="card counter ">
                    <img style={{objectFit: 'cover', height: `150px`}} class="foodImg" src={food} alt=""/>
                    </div>
                </div>
                <div className="col-md-3 my-5">
                    <div className="card counter ">
                        <div className="card-body">

                            <select onChange={(e) => dispatch({type : e.target.value})} className='form-control' name="" id="">
                                <option value="ALU">Alo</option>
                                <option value="POTOL">Potol</option>
                                <option value="LAU">Lao</option>
                                <option value="KUMRA">Kumra</option>
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