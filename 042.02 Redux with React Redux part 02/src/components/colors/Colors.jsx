import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeBlue, makeGray, makeGreen, makeRed, makeYellow } from '../../redux/color/action'
import { makeImgLink } from './makeImgLink'

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
                      <button onClick={ () => dispatch(makeRed()) } >RED</button> &nbsp;
                      <button onClick={ () => dispatch(makeGreen()) } >GREEN</button> &nbsp;
                      <button onClick={ () => dispatch(makeYellow()) } >YELLOW</button> &nbsp;
                      <button onClick={ () => dispatch(makeBlue()) } >BLUE</button> &nbsp;
                      <button onClick={ () => dispatch(makeGray()) } >GRYE</button> &nbsp;
                      </div>
                  </div>
              </div>
              <div className="col-md-4 ">
                  <div className="card counter ">
                      <div className="card-body">
                      <img style={{objectFit: 'cover', height: `150px`}} class="foodImg" src={makeImgLink(food)} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
    </>
  )
}

export default Colors