import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';
import { BsLightning } from '@react-icons/all-files/bs/BsLightning';

const Header = () => (
  <>
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <AnchorLink className="px-4 font-semibold" href="#top">
            <BsLightning />
          </AnchorLink>
        </div>
        <div className="mt-4 sm:mt-0">
          <AnchorLink className="px-4 font-semibold" href="#people">
            People
          </AnchorLink>
          <AnchorLink className="px-4 font-semibold" href="#services">
            Products
          </AnchorLink>
          <AnchorLink className="px-4 font-semibold" href="#stats">
            Partners
          </AnchorLink>
        </div>
        <div className="mt-2 hidden md:block">
          <AnchorLink className="p-4 bg-primary rounded-md text-white" href="#contact">Contact Us</AnchorLink>
        </div>
      </div>
    </header>
  </>
);

export default Header;
