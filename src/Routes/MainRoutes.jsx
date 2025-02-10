import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import AddProducts from '../Pages/AddProducts'
import ProductList from '../Pages/ProductList'
import UsersList from '../Pages/UsersList'
import Error404 from '../Pages/Error404'
import EditProduct from '../Pages/EditProduct'

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/add-product' element={<AddProducts />}/>
        <Route path='/edit-product/:id' element={<EditProduct />}/>
        <Route path='/products-list' element={<ProductList />}/>
        <Route path='/users-list' element={<UsersList />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
