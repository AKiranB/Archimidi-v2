import { useLocation, Link } from "react-router-dom";
import { useHistory } from "react-router";
import service from '../api/service';
import { Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react'

import { Box } from "@mui/system";

export default function NavBar(props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };





  const path = useLocation().pathname
  const history = useHistory()
  const { search, setSearch } = props;

  const handleSearch = e => {
    e.preventDefault()
    history.push('/');
  }

  const handleLogout = () => {
    service.logout()
      .then(() => {
        history.push('/');
        props.setUser(null)
      })
  }

  const searchBar =
    <form className='searchBar'>
      <Input
        type="search"
        name="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder='Type your search here'
      />
      <button onClick={handleSearch}> <SearchIcon /></button>

    </form>

  return (
    <Box className='navBar' >

      {props.user ?

        (
          <div className='navRight'>
            <Tabs
              className='navRight'
              value={value}
              onChange={handleChange}
              style={{ width: 700 }}
            >
              <Tab label='Archimidi' id='logo' component={Link} to='/' />
              <Tab to="/" label='Logout' onClick={() => handleLogout()} />
              <Tab component={Link} to='/songs/add' label='Upload Song' />
              <Tab component={Link} to='/mysongs' label='My Songs' />

            </Tabs>
          </div>
        ) : (
          <div className='navRight'>
            <Tabs
              value={value}
              onChange={handleChange}
            >
              <Tab label='Archimidi' id='logo' component={Link} to='/' />
              <Tab component={Link} label='Sign up' to='/signup' />
              <Tab label='login' component={Link} to='/login' />
            </Tabs>
          </div>)}
      {searchBar}
    </Box>

  )

}