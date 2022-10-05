import { NextPage } from 'next';
import Image from 'next/image';
import MyInput from '../components/input';
import { Checkbox, Container, Input, Radio, RadioGroup, Select, Stack, useToast } from '@chakra-ui/react'
import MySelect from '../components/selects';
import { useState, useRef } from 'react';
import { setTimeout } from 'timers/promises';

const Homework2: NextPage = () => {
  const toast = useToast();
  const [selectValue, setSelectValue] = useState('');
  const [textColor, setTextColor] = useState('#444444');
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [cm, setCM] = useState('');
  const [kg, setKG] = useState('');

  return (
    <div>
      <Container textAlign={'center'} marginTop={10} maxW="container.xl">
        <h1 className="font-bold text-4xl">杏仁咪嚕</h1>
        <p style={{ color: textColor }}>
          杏仁咪嚕（日語：杏仁 ミル／あんにん みる Annin Miru），是一名台灣虛擬YouTuber、遊戲實況主，其頻道以遊戲實況、翻唱及直播為主。杏仁咪嚕為個人勢虛擬網紅，同時與Yahoo TV合作，在Yahoo TV上擁有自己的節目「咪嚕咪嚕杏期四」。
        </p>
      </Container>
      <div className="flex flex-wrap mt-5 justify-center mx-5">
        <div className="flex-grow mx-2">
          <h2 className="text-2xl font-bold text-yellow-500">Profile</h2>
          <Image src="/avatar.jpeg" className="select-none m-auto" width={240} height={240} alt="avatar" />
        </div>
        <div className="flex-grow mx-2 max-w-xl">
          <h2 className="text-2xl font-bold text-yellow-500">個人資料</h2>
          <MyInput name="性*" value="" regex={/^.+$/} setValue={setName} />
          <MyInput name="名*" value="" regex={/^.+$/} setValue={setLast}/>
          <MySelect name="性別" options={['男', '女']} setValue={setSelectValue} />
          <MyInput name="身高(cm)*" value="" regex={/^.+$/} setValue={setCM}/>
          <MyInput name="體重(kg)*" value="" regex={/^.+$/} setValue={setKG}/>
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
          <MySelect name="血型" options={['A', 'B', 'AB', 'O']} />
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
          <h2 className="text-2xl font-bold text-yellow-500">個人資料</h2>
          <MyInput name="地址" value="" />
          <div className="flex flex-row">
            <div className="flex-grow"></div>
            <Stack direction='row' className="w-[320px] justify-between">
                <Checkbox>戶籍地址</Checkbox>
                <Checkbox>通訊地址</Checkbox>
            </Stack>
          </div>
          <MyInput name="電話" value="" regex={/^06(-[0-9]{3}){2}$/g}/>
          <MyInput name="行動電話" value="" regex={/^09[0-9]{2}(-[0-9]{3}){2}$/g}/>
          <MyInput name="Email" value="" regex={/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/g}/>
          <div className="flex flex-row">
            <div className="flex-grow">社群網站:</div>
            <RadioGroup>
              <Stack direction='row' className="w-[320px] justify-between">
                <Radio value='1'>FB</Radio>
                <Radio value='2'>IG</Radio>
                <Radio value='3'>TW</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <MyInput value="" />
        </div>
      </div>
      <div className="flex flex-wrap mt-2 text-white">
        <div className="flex-grow"></div>
        <button 
          className="flex-grow mx-5 bg-green-400 rounded-md p-1 min-w-[200px] mt-3"
          onClick={() => {
            if (name && last && cm && kg) {
              setTextColor(selectValue === '男' ? 'blue' : 'red');
            } else {
              let inputName = ['姓', '名', '身高', '體重'];
              let idk = [name, last, cm, kg];
              for (let err in idk) {
                if (!idk[err])
                  toast({ description: `${inputName[err]}未輸入`, status: 'warning' });
              }
            }
          }}
        >
          確定
        </button>
        <button className="flex-grow mx-5 bg-red-600 rounded-md p-1 min-w-[200px] mt-3">取消</button>
      </div>
    </div>
  );
};

export default Homework2;
