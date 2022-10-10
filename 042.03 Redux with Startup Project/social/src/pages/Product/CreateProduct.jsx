import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert' 

const CreateProduct = () => {

    // form filed state 
    const [input, setInput] = useState({
        name : '', 
        reg_price: '', 
        sale_price: '', 
        stock: '',
        photo: '', 
        file : '',
        gall : '',
        category: [],
        tags: []
    })

    // handle input form value
    const handleInputValue = (e)=> {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    };

    // handle check catagory checkbox
    const handleCatatoryChange = (e) => {
        
        if(e.target.checked ){
            let cats = input.category;
            cats.push(e.target.value)
            setInput((prevState) => ({
                ...prevState,
                category : cats
            }))
        }else{
            let cats = input.category;
            const newCats = cats.filter(data => data !== e.target.value)
            setInput((prevState) => ({
                ...prevState,
                category : newCats
            }))
        }
    }
    // handle check catagory checkbox
    const handleTagsChange = (e) => {
        
        if(e.target.checked ){
            let tags = input.tags;
            tags.push(e.target.value)
            setInput((prevState) => ({
                ...prevState,
                tags : tags
            }))
        }else{
            let tags = input.tags;
            const newTags = tags.filter(data => data !== e.target.value)
            setInput((prevState) => ({
                ...prevState,
                tags : newTags
            }))
        }
    }
    // handle Product Photo update
    const handleProductPhoto = (e) => {
        setInput((prevState) => ({
            ...prevState,
            file : e.target.files[0]
        }));
    }
    // handle Product Gallery update
    const handleProductGallery = (e) => {
        setInput((prevState) => ({
            ...prevState,
            gall : e.target.files
        }));
    }

    //time 50:44 https://www.youtube.com/watch?v=LPpFueI0-Y8&list=PLVAkv8bX85N-oaEI8jGJcmNKBd6yc9N-M&index=130

    // handle from submit
    const handleFormdataSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData();

        data.append('name', input.name);
        data.append('regular_price', input.reg_price);
        data.append('sale_price', input.sale_price);
        data.append('stock', input.stock);
        data.append('category', input.category);
        data.append('tags', input.tags);

        data.append('photo', input.file);
        data.append('gallery', input.gall);

        try {
            await axios.post('http://localhost:5050/api/v1/product/', data)
            .then(res => {
                setInput((prevState) => ({
                    name : '', 
                    reg_price: '', 
                    sale_price: '', 
                    stock: '',
                    photo: '', 
                }))
                // for checkbox or radio button data cleration
                e.target.reset();
    
                swal({
                    title: "Good job!",
                    text: "Product Addad Succful",
                    icon: "success",
                    button: "Ok",
                });
            }).catch(error => {
                swal({
                title: "Faild job!",
                text: "Product not Update",
                icon: "warning",
                button: "Aww yiss!",
                });
                console.log(error);
            })            
            

        } catch (error) {
            // swal({
            // title: "Faild job!",
            // text: "Product not Update",
            // icon: "warning",
            // button: "Aww yiss!",
            // });
            console.log(error);

        }
    }


  return (
    <div className='container my-5'>
    <div className="row justify-content-center">
        <div className="col-md-5">
            <Link className='btn btn-primary' to="/admin/product">Back</Link>
            <br />
            <br />
            <div className="card product shadow-sm">
                <div className="card-body">
                <h2>Add new product</h2>
                <hr />
                <form onSubmit={handleFormdataSubmit}  >
                    <div className="my-3">
                        <label htmlFor="">Name</label>
                        <input  name='name' className='form-control' onChange={handleInputValue} value={input.name} type="text" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Regular Price</label>
                        <input  name='reg_price' className='form-control' onChange={handleInputValue} value={input.reg_price} type="text" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Sale Price</label>
                        <input  name='sale_price' className='form-control' onChange={handleInputValue} value={input.sale_price} type="text" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Stock</label>
                        <input  name='stock' className='form-control' type="text" onChange={handleInputValue} value={input.stock} />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Photo</label>
                        <input onChange={handleProductPhoto}  name='photo' className='form-control' type="file"   />
                    </div>
                    <div className="my-3">
                        <label htmlFor="">Photo</label>
                        <input onChange={handleProductGallery}  name='gallery' multiple className='form-control' type="file"   />
                    </div>
                                        
                    <div className="my-3">
                        <label htmlFor="">Category</label>
                        <br />
                        <label htmlFor="">
                            <input onChange={handleCatatoryChange}  type="checkbox"  value='Men'/> Men
                        </label>
                        <br />
                        <label htmlFor="">
                            <input onChange={handleCatatoryChange}  type="checkbox"  value='Women'/> Women
                        </label>
                        <br />
                        <label htmlFor="">
                            <input onChange={handleCatatoryChange}  type="checkbox"  value='Electronic'/> Electronic
                        </label>
                        <br />
                        <label htmlFor="">
                            <input onChange={handleCatatoryChange}  type="checkbox"  value='Kids'/> Kids
                        </label>
                        
                    </div>
                                        
                    <div className="my-3">
                        <label htmlFor="">Tags</label>
                        <br />
                        <label htmlFor="">
                            <input onChange={handleTagsChange}  type="checkbox"  value='Eid'/> Eid
                        </label>
                        <br />
                        <label htmlFor="">
                            <input onChange={handleTagsChange}   type="checkbox"  value='Puja'/> Puja
                        </label>
                        <br />
                        <label htmlFor="">
                            <input onChange={handleTagsChange}   type="checkbox"  value='Dangu'/> Dangu
                        </label>
                        
                    </div>

                    <div className="my-3">
                        <label htmlFor=""></label>
                        <input className='btn btn-primary w-100' type="submit"  value='Create'/>
                    </div>


                </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
};

export default CreateProduct;