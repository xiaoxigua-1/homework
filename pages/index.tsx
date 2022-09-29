import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center">
      <Image src="avatar.jpeg" width={240} height={240} className="select-none block m-auto" alt="avatar" />
    </div>
  );
}

export default Home;
