import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../asserts/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'


import './header.component.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    // <div className='header'>
    //     <Link className='logo-container' to ="/crwn-clothing/">
    //         <Logo className='logo' />
    //     </Link>
    //     <div className = 'options'>
    //         <Link className='option' to='/crwn-clothing/shop'>SHOP</Link>
    //         <Link className='option' to='/crwn-clothing/contact'>CONTACT</Link>
    //         {currentUser ? 
    //             <div className = 'option' onClick = {() => auth.signOut()}>
    //                 SIGN OUT
    //             </div>
    //         : 
    //             <Link className = 'option' to = '/crwn-clothing/signin'>SIGN IN</Link>
    //         }
    //         <CartIcon />
    //     </div>
    //     {
    //         hidden ? null : <CartDropdown />
    //     }
        
    // </div>
    <div className='header'>
    <Link className='logo-container' to ="/">
        <Logo className='logo' />
    </Link>
    <div className = 'options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {currentUser ? 
            <div className = 'option' onClick = {() => auth.signOut()}>
                SIGN OUT
            </div>
        : 
            <Link className = 'option' to = '/signin'>SIGN IN</Link>
        }
        <CartIcon />
    </div>
    {
        hidden ? null : <CartDropdown />
    }
    
</div>
)


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
  
export default connect(mapStateToProps)(Header);