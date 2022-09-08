import React, { FC } from 'react';
import Content from './content';
import NavSelectMenu from './select_menu';

const Nav: FC = () => {
  return (
    <div className="flex w-full h-12 bg-cyan-600 items-center">
      {/* logo */}
      <div className="h-9 w-9 overflow-hidden rounded-full ml-3">
        <img src="https://avatars.githubusercontent.com/u/60529600?v=4" className="w-full h-full" />
      </div>

      <div className="ml-10 flex">
        <NavSelectMenu name="test1" selectMenu={['a', 'b']} />
        <NavSelectMenu name="test2" selectMenu={['a', 'b']} />
      </div>

      <Content />
    </div>
  );
};

export default Nav;
