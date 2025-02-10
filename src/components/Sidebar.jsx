import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router'

function Sidebar() {
  return (
    <div>
      <div className="sidebar-main">
        
        <div className="logo">

        </div>
        <div className="admin-actions">
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/products-list"}>Show Products</NavLink></li>
                <li><NavLink to={"/add-product"}>Add Product</NavLink></li>
                <li><NavLink to={"/users-list"}>Show Users</NavLink></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
