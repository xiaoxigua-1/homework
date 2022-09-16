import React, { FC } from 'react';
import Input from './input';

const About: FC = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap mt-5">
        <div className="flex-grow mx-2">
          <h2 className="text-2xl font-bold">Profile</h2>
          <img src="https://avatars.githubusercontent.com/u/60529600?v=4" className="select-none w-60 m-auto" />
        </div>
        <div className="flex-grow mx-2">
          <h2 className="text-2xl font-bold">個人資料</h2>
          <Input name="姓" />
          <Input name="名" />
          <Input name="性別" />
          <Input name="身高(cm)" />
          <Input name="體重(kg)" />
          <Input name="生日" />
          <Input name="國籍" />
          <Input name="血型" />
          <Input name="興趣" />

        </div>
        <div className="flex-grow mx-2">
          <h2 className="text-2xl font-bold">聯絡資料</h2>
          <Input name="地址" />
          <Input name="電話" />
          <Input name="email" />
          <Input name="FB" />
          <Input name="IG" />
        </div>
      </div>
      <div className="flex flex-wrap mt-2 text-white">
        <button className="flex-grow mx-5 bg-green-400 rounded-md p-1 min-w-[200px] mt-3">確定</button>
        <button className="flex-grow mx-5 bg-red-600 rounded-md p-1 min-w-[200px] mt-3">取消</button>
      </div>
    </div>
  );
};

export default About;

