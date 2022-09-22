import React from 'react'
import { useSelector } from 'react-redux';
import { makeImgLink } from '../colors/makeImgLink';

const SingleFood = () => {

  const {food} = useSelector(state => state);

  



  return (


    <>
      <div className="container  ">
        <div className="row  justify-content-center">
          <div className="col-md-3 ">
              <div className="card  ">
              <div className='single-food'>
                <img style={{height:'100px', width:'100px', objectFit: 'cover'}} src={makeImgLink(food)} alt="" />
              </div>
              </div>
          </div>
        </div>
      </div>    
    </>

  )
}

export default SingleFood       