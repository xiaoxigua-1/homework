import React, { FC, useState } from 'react';
import { AiOutlineCaretLeft } from "react-icons/ai";

interface SelectMenu {
  name: string;
  selectMenu: string[];
}

const NavSelectMenu: FC<SelectMenu> = ({ name, selectMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  document.onmousedown = () => setIsOpen(false);

  return (
    <div className="relative cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      <div className="text-white flex items-center">
        <div>{name}</div>
        <AiOutlineCaretLeft className={`ml-1 ${isOpen ? '-rotate-90' : ''}`} />
      </div>
      {/* select menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} absolute bg-gray-600 w-full rounded-sm text-white p-1 shadow-md`} >
        {selectMenu.map(name => <div>{name}</div>)}
      </div>
    </div>
  );
};

export default NavSelectMenu;
