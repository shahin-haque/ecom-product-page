import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartIcon from './CartIcon';
import NavMenuIcon from './NavMenuIcon';
import Profile from './Profile';

const NavBar = () => {
  return (
    <neader className="header">
      <NavMenuIcon />
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={150} height={20} />
      </Link>

      <nav className="nav">
        <ul className="nav-links-wrapper" aria-label="Primary-Navigation">
          <li className="link">
            <Link href="collection">Collection</Link>
          </li>
          <li className="link">
            <Link href="men">Men</Link>
          </li>
          <li className="link">
            <Link href="women">Women</Link>
          </li>
          <li className="link">
            <Link href="about">About</Link>
          </li>
          <li className="link">
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="prrofile-wrapper">
        <CartIcon />
        <Profile />
      </div>
    </neader>
  );
};

export default NavBar;
