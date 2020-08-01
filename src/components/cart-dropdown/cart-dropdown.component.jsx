import React from 'react';

import CustomButtom from '../custom-button/custom-button.component';

import './cart-dropdown.component.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'/>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
)

export default CartDropdown;