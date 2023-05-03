import React from 'react';
import Logo from '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import SignOutButton from './SignOutButton';

export default function Header() {
  return (
    <header className="flex justify-between pt-3 container mx-auto">
      <NavLink to="/">
        <img className="h-16" src={Logo} />
      </NavLink>
      <div className="flex gap-10 justify-between items-center">
        <div className="gap-5 flex">
          <button className="hover:opacity-50 focus:text-regular-blue">EN</button>
          <button className="hover:opacity-60 focus:text-regular-blue">RU</button>
        </div>
        <SignOutButton />
      </div>
    </header>
  );
}
