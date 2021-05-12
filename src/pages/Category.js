import React, { useState } from "react";
import {createCategory} from '../actions/category.action';
import { useDispatch } from "react-redux";


const Category = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: ''
  });
 


  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({...formData, [name]: value})
  }
  


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createCategory(formData))
    }

  return (
    <div className="container-fluid">
      <h5>Add Category</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cname">Category</label>
          <input
            type="text"
            className="form-control col-4"
            id="name"
            name="name"
            onChange={(e) => handleChange(e)}
            value={formData.name}
            placeholder="Enter Category"
          />
          
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Category;
