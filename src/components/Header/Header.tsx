import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import { WHITE_HEADER, GRAY_HEADER } from '../../constants/constants';

export default function Header() {
  const [className, setClassName] = useState<string>(GRAY_HEADER);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setClassName(WHITE_HEADER);
      } else setClassName(GRAY_HEADER);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={className}>
      <nav className="flex justify-between mx-w-screen-xl">
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
      </nav>
    </header>
  );
}
