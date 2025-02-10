import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "../Styles/AddProduct.css"
import MultipleSelect from '../components/SelectDropdown';
import BasicSelect from '../components/SelectDropdown';
import SelectDropdown from '../components/SelectDropdown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';

import jsonData from "../data.json";
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router';

function EditProduct() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discount: "",
    desc: "",
    brand: "",
    design: "",
    sleeve: "",
    neck: "",
    type: "",
    fit: "",
    occasion: "",
    sizes: [],
    colors: [],
    images: [""],
    reviews: [""],
    rating: 0.0,
    quantity: "",
    category: "",
    subcategory: ""
  })
  const { id } = useParams();
  const navigator = useNavigate();

  const brand = jsonData.brand;
  const design = jsonData.design;
  const sleeve = jsonData.sleeve;
  const neck = jsonData.neck;
  const type = jsonData.type;
  const fit = jsonData.fit;
  const sizes = jsonData.sizes;
  const colors = jsonData.colors;
  const occasion = jsonData.occasion;
  const category = jsonData.category;
  const men_subcat = jsonData.men_subcat;
  const women_subcat = jsonData.women_subcat;

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        console.log(res);
        setFormData(res.data)
      })
      .catch((err) => {
        console.log(err);
        setError(err.message)
      })
  }, [])

  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    if (isNaN(name)) {
      setFormData({ ...formData, [name]: value })
    } else {
      let arr = [...formData.images];
      arr[name] = value;
      setFormData({ ...formData, images: arr })
    }
  }

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
        ? [...prevData[name], value]  // Add value to array if checked
        : prevData[name].filter((item) => item !== value), // Remove if unchecked
    }));
  };

  const handleAddImage = () => {
    setFormData({
      ...formData,
      images: [...formData.images, ""]
    })
  }

  const handleRemoveImage = (e) => {
    if (formData.images.length > 1) {
      setFormData({
        ...formData,
        images: formData.images.slice(0, -1)
      });
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3000/products/${id}`, formData)
      .then((res) => {
        console.log(res);
        alert("Product updated successfully!!")
        navigator("/products-list")
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update product!!")
      })

    setFormData({
      title: "",
      price: "",
      discount: "",
      desc: "",
      brand: "",
      design: "",
      sleeve: "",
      neck: "",
      type: "",
      fit: "",
      sizes: [],
      colors: [],
      images: [""],
      quantity: "",
      category: "",
      subcategory: ""
    })

  }

  return (
    <div>
      <div className="main-add-products">
        <form onSubmit={handleOnSubmit}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
              <TextField
                onChange={handleOnChnage}
                name='title'
                value={formData.title}
                label="Title"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
              />
              <SelectDropdown
                name='brand'
                label="Brand"
                options={brand}
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              />
              <TextField
                onChange={handleOnChnage}
                name='price'
                value={formData.price}
                label="Price"
                id="outlined-start-adornment"
                autoComplete='off'
                sx={{ m: 1, width: '25ch' }}
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                  },
                }}
              />
              <TextField
                onChange={handleOnChnage}
                name='discount'
                value={formData.discount}
                label="Discount"
                id="outlined-start-adornment"
                autoComplete='off'
                sx={{ m: 1, width: '25ch' }}
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">%</InputAdornment>,
                  },
                }}
              />
              <FormControl fullWidth sx={{ m: 1, width: '78.5ch' }}>
                <InputLabel htmlFor="description">Description</InputLabel>
                <OutlinedInput
                  onChange={handleOnChnage}
                  name='desc'
                  value={formData.desc}
                  id="description"
                  label="Description"
                  autoComplete='off'
                />
              </FormControl>
              <SelectDropdown
                label="Design"
                options={design}
                value={formData.design}
                onChange={(e) => setFormData({ ...formData, design: e.target.value })}
              />
            </div>
            <div>
              <SelectDropdown
                label="Sleeve"
                options={sleeve}
                value={formData.sleeve}
                onChange={(e) => setFormData({ ...formData, sleeve: e.target.value })}
              />
            </div>
            <div>
              <SelectDropdown
                label="Neck"
                options={neck}
                value={formData.neck}
                onChange={(e) => setFormData({ ...formData, neck: e.target.value })}
              />
              <SelectDropdown
                label="Type"
                options={type}
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              />
              <SelectDropdown
                label="Fit"
                options={fit}
                value={formData.fit}
                onChange={(e) => setFormData({ ...formData, fit: e.target.value })}
              />
            </div>
            <div>
              <SelectDropdown
                label="Occasion"
                options={occasion}
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
              />
              <TextField
                onChange={handleOnChnage}
                name='quantity'
                value={formData.quantity}
                label="Quantity"
                id="outlined-start-adornment"
                autoComplete='off'
                sx={{ m: 1, width: '25ch' }}
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">Pcs.</InputAdornment>,
                  },
                }}
              />
              <SelectDropdown
                name='category'
                label="Category"
                options={category}
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
              <SelectDropdown
                name='subcategory'
                label="Sub Category"
                options={formData.category == "men" ? men_subcat : women_subcat}
                value={formData.subcategory}
                onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                disabled={"true"}
              />
              <div className='img-field'>
                {
                  formData.images.map((el, index) => {
                    return (
                      <div className='images-field'>
                        <img src={formData.images[index]} alt="img" />
                        <FormControl fullWidth sx={{ m: 1, width: '31ch' }}>
                          <InputLabel htmlFor="image-url">Image-  {index + 1}</InputLabel>
                          <OutlinedInput
                            onChange={handleOnChnage}
                            name={index}
                            value={formData.images[index]}
                            id="image-url"
                            label="image-url"
                            autoComplete='off'
                          />
                        </FormControl>
                        {formData.images.length > 1 ?
                          <Button onClick={(el) => handleRemoveImage(el, index)} variant="outlined" color='error' sx={{ m: '1ch', width: '15ch', height: '7ch' }}>Remove</Button> : ""}
                      </div>
                    )
                  })
                }
                <Button onClick={handleAddImage} variant="contained" sx={{ m: 1, width: '15ch', height: '7ch' }}>Add URL</Button>
              </div>
            </div>

            <div className='checkbox'>
              <p style={{ margin: '5px 7px' }}>Sizes:</p>
              <div className="options">
                {sizes.map((size) => (
                  <FormControlLabel
                    key={size.id}
                    control={
                      <Checkbox
                        sx={{ ml: 1 }}
                        name="sizes"
                        value={size.label}
                        checked={formData.sizes.includes(size.label)}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label={size.label}
                  />
                ))}
              </div>
            </div>

            <div className='checkbox'>
              <p style={{ margin: '5px 7px' }}>Colors:</p>
              <div className="options">
                {colors.map((color) => (
                  <FormControlLabel
                    key={color.id}
                    control={
                      <Checkbox
                        sx={{ ml: 1, color: color.id, '&.Mui-checked': { color: color.id } }}
                        name="colors"
                        value={color.label}
                        checked={formData.colors.includes(color.label)}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label={color.label}
                  />
                ))}
              </div>
            </div>
            <div>

            </div>
          </Box>
          <div className="add-btns" >
            <Link to={"/products-list"}><Button variant="outlined" color="error" sx={{ width: '45ch' }}>Cancel</Button></Link>
            <Button type='submit' variant="contained" color="primary" sx={{ width: '45ch' }}>
              Update Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProduct
