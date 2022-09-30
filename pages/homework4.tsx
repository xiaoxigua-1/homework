import { NextPage } from 'next';
import Image from 'next/image';
import MyInput from '../components/input';
import { Checkbox, Input, Select, Stack } from '@chakra-ui/react'

const Homework2: NextPage = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-5 justify-center">
        <div className="flex-grow mx-2">
          <h2 className="text-2xl font-bold">Profile</h2>
          <Image src="/avatar.jpeg" className="select-none m-auto" width={240} height={240} alt="avatar" />
        </div>
        <div className="flex-grow mx-2 max-w-xl">
          <h2 className="text-2xl font-bold">個人資料</h2>
          <MyInput name="性" value=""/>
          <MyInput name="名" value=""/>
          <div className="flex justify-between mt-2">
            <span className="whitespace-nowrap">性別:</span>
            <div className="w-[320px]">
              <Select className="w-28" size="sm">
                <option>男</option>
                <option>女</option>
              </Select>
            </div>
          </div>
          <MyInput name="身高(cm)" value=""/>
          <MyInput name="體重(kg)" value=""/>
          <MyInput name="生日" value=""/>
          <div className="flex justify-between mt-2">
            <span className="whitespace-nowrap">生日:</span>
            <div className="w-[320px]">
              <Input
                placeholder="Select Date and Time"
                size="sm"
                type="datetime-local"
              />
            </div>
          </div>
          <MyInput name="國籍" value=""/>
          <div className="flex justify-between mt-2">
            <span className="whitespace-nowrap">血型:</span>
            <div className="w-[320px]">
              <Select className="w-28" size="sm">
                <option>A</option>
                <option>B</option>
                <option>AB</option>
                <option>O</option>
              </Select>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="whitespace-nowrap">興趣:</span>
            <Stack direction='row' className="w-[320px] justify-between">
              <Checkbox>偷</Checkbox>
              <Checkbox>拐</Checkbox>
              <Checkbox>搶</Checkbox>
              <Checkbox>騙</Checkbox>
            </Stack>
          </div>
        </div>
        <div className="flex-grow mx-2 max-w-xl">
          <h2 className="text-2xl font-bold">個人資料</h2>
          <MyInput name="地址" value="" />
          <div className="flex flex-row">
            <div className="flex-grow"></div>
            <Stack direction='row' className="w-[320px] justify-between">
                <Checkbox>戶籍地址</Checkbox>
                <Checkbox>通訊地址</Checkbox>
            </Stack>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-2 text-white">
        <div className="flex-grow"></div>
        <button className="flex-grow mx-5 bg-green-400 rounded-md p-1 min-w-[200px] mt-3">確定</button>
        <button className="flex-grow mx-5 bg-red-600 rounded-md p-1 min-w-[200px] mt-3">取消</button>
      </div>
    </div>
  );
};

export default Homework2;
