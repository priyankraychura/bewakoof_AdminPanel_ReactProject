import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="search-bar">
          <TextField
            id="outlined-size-small"
            size="small"
            placeholder='Search here...'
          />
          <SearchIcon />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
