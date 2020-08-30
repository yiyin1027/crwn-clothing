import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../asserts/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';


import './header.component.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to ="/crwn-clothing/">
            <Logo className='logo' />
        </Link>
        <div className = 'options'>
            <Link className='option' to='/crwn-clothing/shop'>SHOP</Link>
            <Link className='option' to='/crwn-clothing/shop'>CONTACT</Link>
            {currentUser ? 
                <div className = 'option' onClick = {() => auth.signOut()}>
                    SIGN OUT
                </div>
            : 
                <Link className = 'option' to = '/crwn-clothing/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
  });
  
export default connect(mapStateToProps)(Header);