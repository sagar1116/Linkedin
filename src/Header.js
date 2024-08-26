import React from 'react';
import './Header.css';
import search from 'material-icons/iconfont/material-icons.css';
import './linkedin.png';
import HeaderOption from './HeaderOption';
import { AccessAlarm, Home, Message, Notifications, SupervisorAccount, Work } from '@mui/icons-material';

function Header() {
  return (        
    <div className="header">
      <div className='header_left'>
        <img src='linkedin.png'alt='Logo'/>
      </div>
      <div className='header_search'>
        <span className='material-icons'>search</span>
        <input type="text"/>
      </div>
      <div className='header_right' >
        <HeaderOption Icon={Home}title="Home"/>
        <HeaderOption Icon={SupervisorAccount}title="My Network"/>
        <HeaderOption Icon={Work}title="Jobs"/>
        <HeaderOption Icon={Message}title="Message"/>        
        <HeaderOption Icon={Notifications}title="Notification"/>
        <HeaderOption avatar='NetworkPing.png'/>
      </div>
    </div>
  );
}

export default Header;
