import React, { FC, useState } from 'react';
import { AiOutlineCaretLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

interface SelectMenu {
  name: string;
  selectMenu: MenuItem[];
}

interface MenuItem {
  name: string;
  link: string;
}

const NavSelectMenu: FC<SelectMenu> = ({ name, selectMenu }) => {
  return (
    <div className="relative cursor-pointer md:ml-3 group" tabIndex={0}>
      <div className="text-white flex items-center md:p-auto px-5" >
        <div>{name}</div>
        <AiOutlineCaretLeft className={`ml-1 group-focus-within:-rotate-90`} />
      </div>
      {/* select menu */}
      <div className={`group-focus-within:block hidden md:absolute md:bg-slate-600 md:shadow-md w-full rounded-sm text-white md:px-auto px-8 top-10`} >
        {selectMenu.map(item => (
          <div>
            <Link key={item.name} to={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavSelectMenu;
