import React, { createRef, useEffect, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import { WHITE_HEADER, GRAY_HEADER } from '../../constants/constants';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Header() {
  const headerRef = createRef<HTMLDivElement>();

  const [className, setClassName] = useState<string>(WHITE_HEADER);
  const [user] = useAuthState(auth);
  console.log({ user });

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

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header ref={headerRef} className={className}>
      <nav className="flex sticky justify-between mx-w-screen-xl">
        <NavLink to="/">
          <img className="h-16" src={Logo} />
        </NavLink>
        <div className="flex gap-10 justify-between items-center">
          <div className="gap-5 flex">
            <button className="hover:opacity-50 focus:text-regular-blue">EN</button>
            <button className="hover:opacity-60 focus:text-regular-blue">RU</button>
          </div>
          {user === null ? (
            <>
              <NavLink to="/sign-in">
                <button className="py-2 px-4 hover:bg-light-blue hover:text-black text-white h-10 bg-dark-blue rounded-md">
                  Sign In
                </button>
              </NavLink>
              <NavLink to="/sign-up">
                <button className="py-2 px-4 hover:bg-light-blue hover:text-black text-white h-10 bg-dark-blue rounded-md">
                  Sign Up
                </button>
              </NavLink>
            </>
          ) : (
            <SignOutButton onClick={handleSignOut} />
          )}
        </div>
      </nav>
    </header>
  );
}
