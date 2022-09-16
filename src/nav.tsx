import React, { FC, useState } from 'react';
import NavSelectMenu from './select_menu';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full h-12 bg-cyan-600 items-center relative">
      {/* logo */}
      <div className="h-9 w-9 overflow-hidden rounded-full ml-3">
        <Link to="/">
          <img src="https://avatars.githubusercontent.com/u/60529600?v=4" className="w-full h-full" />
        </Link>
      </div>

      <div
        className={`flex md:static absolute top-12 flex-col md:flex-row md:ml-10 bg-cyan-600 w-full md:w-auto ${isOpen ? "h-auto" : "h-0"} md:h-auto md:overflow-visible overflow-hidden`}
      >
        <Link to="/about" className="text-white">About</Link>
        <NavSelectMenu name="test1" selectMenu={['a', 'b']} />
        <NavSelectMenu name="test2" selectMenu={['a', 'b']} />
      </div>

      <div className="absolute right-5">
        <AiOutlineMenu size={24} color="#ffffff" className="cursor-pointer block md:hidden" onClick={() => setIsOpen(!isOpen)} />
      </div>
    </div>
  );
};

export default Nav;
