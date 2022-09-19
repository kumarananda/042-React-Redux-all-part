import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Colors = () => {

  // use despatch
  const dispatch = useDispatch() 
  const {food} = useSelector(state => state)


 


  return (
    <>
    
      <div className="container  ">
          <div className="row  justify-content-center">
              <div className="col-md-4 ">
                  <div className="card counter ">
                      <div className="card-body">
                      <h3>Background Color</h3>
                      <button  onClick={() => dispatch({type: "RED"})} >RED</button> &nbsp;
                      <button onClick={() => dispatch({type: "GREEN"})} >GREEN</button> &nbsp;
                      <button onClick={() => dispatch({type: "YELLOW"})} >YELLOW</button> &nbsp;
                      <button onClick={() => dispatch({type: "BLUE"})} >BLUE</button> &nbsp;
                      <button onClick={() => dispatch({type: "GRAY"})} >GRYE</button> &nbsp;
                      </div>
                  </div>
              </div>
              <div className="col-md-4 ">
                  <div className="card counter ">
                      <div className="card-body">
                      <img style={{objectFit: 'cover', height: `150px`}} class="foodImg" src={food} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
    </>
  )
}

export default Colors