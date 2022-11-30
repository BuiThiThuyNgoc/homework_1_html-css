import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
    return (
        <div className="header">
            <RadioButtonUncheckedIcon>
                <PersonIcon fontSize="large" className="header_icon" />
            </RadioButtonUncheckedIcon>
            <img className="header_logo" src="" alt="header" />
            <RadioButtonUncheckedIcon>
            <ForumIcon className="header_logo" src="" alt="header" />   
            </RadioButtonUncheckedIcon>
        </div>
    )
}

export default Header