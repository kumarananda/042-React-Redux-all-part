import React from 'react'
import { useState } from 'react'

const Devs = () => {

    const [devs, setDevs] = useState({
        name: "",
        email: '',
        cell: '',
    })
    const handleInput = (e) => {
        setDevs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }) )

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
                                    <tr>
                                        <td>1</td>
                                        <td>Ananda</td>
                                        <td>ananda484@gmail.com</td>
                                        <td>01913918163</td>
                                        <td></td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <form action="">
                        <div className="my-3">
                            <label htmlFor="001">Name</label>
                            <input onChange={handleInput} name='name' value={devs.name} className='form-control' id='001' type="text" />
                        </div>
                        <div className="my-3">
                            <label htmlFor="002">Email</label>
                            <input onChange={handleInput} name='email' value={devs.email} className='form-control' id='002' type="text" />
                        </div>
                        <div className="my-3">
                            <label htmlFor="003">Cell</label>
                            <input onChange={handleInput} name='cell' value={devs.cell} className='form-control' id='003' type="text" />
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