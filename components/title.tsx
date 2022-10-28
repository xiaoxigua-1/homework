import react from 'react';
import { NextPage } from 'next';

interface Title {
  style: string;
  en: string;
  ch: string;
}

const Title: NextPage<Title> = ({ style, en, ch }) => {
  return (
    <div className={`${style} group`}>
      <div className="group-hover:hidden">{en}</div>
      <div className="group-hover:block hidden">{ch}</div>
    </div>
  );
};

export default Title;
