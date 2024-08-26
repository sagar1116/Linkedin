import React from 'react'
import "./HeaderOption.css";
import { Avatar } from '@mui/material';


function HeaderOption({Icon, title, avatar}) {
  return (
    <div className='headerOption'>
         {Icon && <Icon className='headerOption_icon'/>} {/* If im passing the icon onely then icon is rendered as component*/}
         {avatar  &&
            <Avatar className='headOption_icon'src={avatar}/>
         }
         <h3 className='headerOption_title'>{title}</h3>
      
    </div>
  )
}

export default HeaderOption
