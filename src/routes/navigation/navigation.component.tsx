import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';

import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartOpen } from '../../store/cart/cart.selector';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  NavLinkSpan,
} from './navigation.style';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartOpen = useSelector(selectCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to={'/shop'}>SHOP</NavLink>
          <div>
            {currentUser ? (
              <NavLinkSpan onClick={signOutUser}>SIGN OUT</NavLinkSpan>
            ) : (
              <NavLink to={'/auth'}>SIGN IN</NavLink>
            )}
          </div>
          <CartIcon />
          {cartOpen && <CartDropdown />}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
