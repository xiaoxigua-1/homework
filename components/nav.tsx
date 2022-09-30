import { AiOutlineMenu } from 'react-icons/ai';
import NavSelectMenu from '../components/nav_select_menu';
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';

const nav = [
  {
    name: 'Homework 3',
    link: '/about',
  },
  {
    name: 'Homework 4',
    link: '/homework4',
  },
  {
    name: 'Homework 5',
    link: '/about',
  },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full h-12 bg-cyan-600 items-center relative">
      {/* logo */}
      <div className="h-9 w-9 overflow-hidden rounded-full ml-3">
        <Link href="/">
          <Image src="/avatar.jpeg" width={'100%'} height={'100%'} alt="logo" />
        </Link>
      </div>

      <div
        className={`flex md:static absolute top-12 flex-col md:flex-row md:ml-10 bg-cyan-600 w-full md:w-auto ${isOpen ? "h-auto" : "h-0"} md:h-auto md:overflow-visible overflow-hidden`}
      >
        <NavSelectMenu name="homework" selectMenu={nav} />
      </div>

      <div className="absolute right-5">
        <AiOutlineMenu size={24} color="#ffffff" className="cursor-pointer block md:hidden" onClick={() => setIsOpen(!isOpen)} />
      </div>
    </div>
  );
}

export default Nav;
