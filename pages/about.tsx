import Input from '../components/input';
import { NextPage } from 'next';
import Image from 'next/image';
import { Container } from '@chakra-ui/react';

const About: NextPage = () => {
  return (
    <div>
      <Container textAlign={'center'} marginTop={10} maxW="container.xl">
        <h1 className="font-bold text-4xl">杏仁咪嚕</h1>
        <p>
          杏仁咪嚕（日語：杏仁 ミル／あんにん みる Annin Miru），是一名台灣虛擬YouTuber、遊戲實況主，其頻道以遊戲實況、翻唱及直播為主。杏仁咪嚕為個人勢虛擬網紅，同時與Yahoo TV合作，在Yahoo TV上擁有自己的節目「咪嚕咪嚕杏期四」。
        </p>
      </Container>
      <div className="flex flex-wrap mt-5 justify-center">
        <div className="flex-grow mx-2 text-yellow-500">
          <h2 className="text-2xl font-bold">Profile</h2>
          <Image src="/avatar.jpeg" className="select-none m-auto" width={240} height={240} alt="avatar" />
        </div>
        <div className="flex-grow mx-2 max-w-xl">
          <h2 className="text-2xl font-bold text-yellow-500">個人資料</h2>
          <Input name="本名" value="杏仁（あんにん） ミル" />
          <Input name="別號" value="老大、公主、天使、媽媽、媽咪" />
          <Input name="髮色" value="硬木色、部份挑染月黃色" />
          <Input name="瞳色" value="金瞳" />
          <Input name="身高" value="3顆蘋果那麼高(換算成現實大約150cm)" />
          <Input name="體重" value="3顆(箱)草莓那麼重" />
          <Input name="三圍" value="別問，問就是36D" />
          <Input name="年齡" value="自稱永遠的6歲歲" />
          <Input name="生日" value="6月8日" />

        </div>
        <div className="flex-grow mx-2 max-w-xl">
          <h2 className="text-2xl font-bold text-yellow-500">聯絡資料</h2>
          <Input name="地址" value="神祕的地方" />
          <Input name="電話" value="09xxxxxxxx"/>
          <Input name="email" value="anninmiru@gmail.com"/>
          <Input name="youtube" value="https://www.youtube.com/c/AnninMiruChannel/about" />
          <Input name="twitter" value="https://twitter.com/AnninMirudayo" />
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

export default About;