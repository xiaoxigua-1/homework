import { NextPage } from 'next';
import Image from 'next/image';
import MyInput from '../components/input';
import { Checkbox, Container, Input, Radio, RadioGroup, Stack, useToast } from '@chakra-ui/react'
import MySelect from '../components/selects';
import { useState} from 'react';
import Title from '../components/title';

interface Data {
  message?: string;
  name?: string,
  birthday?: string,
  height?: string,
  addres?: string,
  mobile?: string,
  phone?: string,
  sticker?: Sticker
}

interface Sticker {
  packageId: string;
  stickerId: string;
}

const Homework2: NextPage = () => {
  const toast = useToast();
  const [data, setData] = useState<Data>({});

  return (
    <div>
      <Container textAlign={'center'} marginTop={10} maxW="container.xl">
        <h1 className="font-bold text-4xl">杏仁咪嚕</h1>
        <p>
          杏仁咪嚕（日語：杏仁 ミル／あんにん みる Annin Miru），是一名台灣虛擬YouTuber、遊戲實況主，其頻道以遊戲實況、翻唱及直播為主。杏仁咪嚕為個人勢虛擬網紅，同時與Yahoo TV合作，在Yahoo TV上擁有自己的節目「咪嚕咪嚕杏期四」。
        </p>
      </Container>
      <div className="flex flex-wrap mt-5 justify-center mx-5">
        <div className="flex-grow mx-2">
          <Title style="text-2xl font-bold text-yellow-500" en="Profile" ch="大頭貼" />
          <Image src="/avatar.jpeg" className="select-none m-auto" width={240} height={240} alt="avatar" />
        </div>
        <div className="flex-grow mx-2 max-w-xl">
          <Title style="text-2xl font-bold text-yellow-500" en="Information" ch="個人資料" />
          <MyInput name="性*" value="" regex={/^.+$/}  />
          <MyInput name="名*" value="" regex={/^.+$/} setValue={(name: string) => { setData({...data, name: name}) }} />
          <MySelect name="性別" options={['男', '女']} />
          <MyInput name="身高(cm)*" value="" regex={/^.+$/} setValue={(height: string) => { setData({...data, height: height}) }}/>
          <MyInput name="體重(kg)*" value="" regex={/^.+$/} />
          <div className="flex justify-between mt-2">
            <span className="whitespace-nowrap">生日:</span>
            <div className="w-[320px]">
              <Input
                placeholder="Select Date and Time"
                size="sm"
                type="datetime-local"
                onChange={(e) => {
                  setData({...data, birthday: e.target.value});
                }}
              />
            </div>
          </div>
          <MyInput name="國籍" value=""/>
          <MySelect name="血型" options={['A', 'B', 'AB', 'O']} />
        </div>
        <div className="flex-grow mx-2 max-w-xl">
          <Title style="text-2xl font-bold text-yellow-500" en="Contact" ch="聯絡資料" />
          <MyInput name="地址" value="" setValue={(addres: string) => { setData({...data, addres: addres}) }} />
          <MyInput name="電話" value="" regex={/^06(-[0-9]{3}){2}$/g} setValue={(phone: string) => { setData({...data, phone: phone}) }} />
          <MyInput name="行動電話" value="" regex={/^09[0-9]{2}(-[0-9]{3}){2}$/g} setValue={(mobile: string) => { setData({...data, mobile: mobile}) }} />
          <MyInput name="Message" value="" setValue={(message: string) => { setData({...data, message: message}) }} />
        </div>
      </div>
      <div className="flex flex-wrap mt-2 text-white">
        <div className="flex-grow"></div>
        <button 
          className="flex-grow mx-5 bg-green-400 rounded-md p-1 min-w-[200px] mt-3"
          onClick={() => {
            console.log(data);
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


