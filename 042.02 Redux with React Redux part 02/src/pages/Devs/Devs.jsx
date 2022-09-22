import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Devs = () => {

    // form value state
    const [input, setInput] = useState({
        name: "",
        email: '',
        cell: '',
    })
    const dispatch = useDispatch()
    const {devs}  = useSelector(state => state.devs)
    // console.log(devs);

    // handle form input value
    const handleInput = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }) )
    }



    // handle form data submit
    const handleFormSubmit = (e) => {
        e.preventDefault()

        let data = [];

        if(localStorage.getItem('devs')){
            data = JSON.parse(localStorage.getItem('devs'))
        }

        data.push(input);

        localStorage.setItem('devs', JSON.stringify(data))

        dispatch({
            type : 'DEVS_ADDED',
            payload : data
        })

    }



    // time 20:19 
    // https://www.youtube.com/watch?v=mneDj2EGKoU&list=PLVAkv8bX85N-oaEI8jGJcmNKBd6yc9N-M&index=126&t=32s



  return (
    <>
    <div className="devs">
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2>All Developers</h2>
                            <hr />
                            <table className='table-striped table-bordered w-100'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Cell</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        devs.map( (data, index) => 
                                            <tr>
                                                <td>{index +1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.cell}</td>
                                                <td></td>
                                            </tr>
                                        )
                                    }
                                    

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <form onSubmit={handleFormSubmit}>
                        <div className="my-3">
                            <label htmlFor="001">Name</label>
                            <input onChange={handleInput} name='name' value={input.name} className='form-control' id='001' type="text" />
                        </div>
                        <div className="my-3">
                            <label htmlFor="002">Email</label>
                            <input onChange={handleInput} name='email' value={input.email} className='form-control' id='002' type="text" />
                        </div>
                        <div className="my-3">
                            <label htmlFor="003">Cell</label>
                            <input onChange={handleInput} name='cell' value={input.cell} className='form-control' id='003' type="text" />
                        </div>
                        <div className="my-3">
                            <button className='w-100 btn btn-primary'  type='submit'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Devs