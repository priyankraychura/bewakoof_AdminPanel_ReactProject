import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../Styles/ProductList.css"
import Button from '@mui/material/Button';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [updated, isUpdated] = useState(false);
  const [isError, setError] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err);
        setError(err.message)
      })
  }, [updated])

  const handleEdit = (id) => {
    console.log(id);
    
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
    .then((el) => {
      isUpdated(!updated);
      console.log(el);
    })
    .catch((err) => {
      console.log(err);
    })
    
  }
  console.log(isError);
  

  return (
    <div>
      <div className="main-show-products">
      {isError ? <h1> {isError} </h1> : 
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Img</th>
              <th>Title</th>
              <th>Description</th>
              <th>Type</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Inventory</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((el) => {
                return <tr key={el.id}>
                    <td>{el.id}</td>
                    <td><img src={el.images[0]} alt={"img - " + el.id} /></td>
                    <td>{el.title}</td>
                    <td>{el.desc}</td>
                    <td>{el.type}</td>
                    <td>{el.brand}</td>
                    <td>{el.category}</td>
                    <td>₹{el.price}</td>
                    <td>{el.discount}%</td>
                    <td>{el.quantity} Pcs</td>
                    <td className='actions'>
                      <div className="btns">
                        <DeleteForeverRoundedIcon onClick={() => handleDelete(el.id)} color='error'>}Delete</DeleteForeverRoundedIcon>
                        <Link to={`/edit-product/${el.id}`}><ModeEditTwoToneIcon onClick={() => handleEdit(el.id)} color="success"> Edit</ModeEditTwoToneIcon></Link>
                      </div>
                    </td>
                  </tr>
              })
            }
          </tbody>
        </table>
        }
      </div>
    </div>
  )
}

export default ProductList
