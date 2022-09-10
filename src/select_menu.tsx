import React, { FC, useState } from 'react';
import { AiOutlineCaretLeft } from "react-icons/ai";

interface SelectMenu {
  name: string;
  selectMenu: string[];
}

const NavSelectMenu: FC<SelectMenu> = ({ name, selectMenu }) => {
  return (
    <div className="relative cursor-pointer md:ml-3">
      <div className="text-white flex items-center md:p-auto px-5 group peer" tabIndex={0}>
        <div>{name}</div>
        <AiOutlineCaretLeft className={`ml-1 group-focus-within:-rotate-90`} />
      </div>
      {/* select menu */}
      <div className={`peer-focus-within:block hidden md:absolute md:bg-slate-600 md:shadow-md w-full rounded-sm text-white md:px-auto px-8 top-10`} >
        {selectMenu.map(name => <div>{name}</div>)}
      </div>
    </div>
  );
};

export default NavSelectMenu;
