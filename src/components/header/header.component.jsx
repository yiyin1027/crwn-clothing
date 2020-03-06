import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../asserts/crown.svg';

import './header.component.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to ="/">
            <Logo className='logo' />
        </Link>
        <Link className='options'></Link>

    </div>
)

export default Header;