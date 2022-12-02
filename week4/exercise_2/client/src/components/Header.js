import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="logo192.png" alt="header" />
            <IconButton>
            <ForumIcon className="header__logo" src="" alt="header" />   
            </IconButton>
        </div>
    )
}

export default Header