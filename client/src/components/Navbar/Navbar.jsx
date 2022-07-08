import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import decode from 'jwt-decode';
import { Typography, Toolbar, Avatar } from '@material-ui/core';

import * as actionType from '../../constants/actionTypes';
import Form from "../Form/Form";
import images from '../../constants/images';
import './Navbar.scss'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false)
  const [currentId, setCurrentId] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();

  const logout = () => {

    dispatch({ type: actionType.LOGOUT });
    history('/');
    history(0);
    setUser(null);

  };

  useEffect(() => {

    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));

  }, [location]);

  return (

    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img src={images.memories_logo} alt="applogo" />
      </div>

      <div className="app__post">
        <button onClick={() => setToggleMenu(true)} >POST</button>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <MdOutlineClose className="overlay__close" onClick={() => setToggleMenu(false)} />
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        )}
      </div>

      <div className="app__navbar-title">
        <p>Share Your Memory !</p>
      </div>

      <Toolbar className="app__auth">
        {user?.result ? (
          <div className="app__logout">
            <Avatar className="app__logout1" alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className="app__logout2" variant="h6">{user?.result.name}</Typography>
            <button className="app__logout3" onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="app__logout">
            <Link to="/auth">
              <button>Sign In</button>
            </Link>
          </div>
        )}
      </Toolbar>

    </nav >
  )
};

export default Navbar;


