import Image from 'next/image';
import React, { useState } from 'react';

const NavMenuIcon = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      {isNavOpen ? (
        <button
          className="toggle-menu"
          aria-controls="Primary-Navigation"
          aria-expanded="true"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <Image
            src="/icon-close.svg"
            alt="icon-menu-close"
            width={20}
            height={20}
          />
        </button>
      ) : (
        <button
          className="toggle-menu"
          aria-controls="Primary-Navigation"
          aria-expanded="false"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <Image
            src="/icon-menu.svg"
            alt="icon-menu-open"
            width={20}
            height={20}
          />
        </button>
      )}
    </>
  );
};

export default NavMenuIcon;
