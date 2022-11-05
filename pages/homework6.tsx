import { NextPage } from 'next';
import { useFormik } from 'formik';
import { Button, Container, FormControl, FormLabel, Input, InputGroup, NumberInput, NumberInputField, Textarea } from '@chakra-ui/react';
import Title from '../components/title';
import Image from 'next/image';

interface Data {
  message: string;
  name: string,
  birthday: string,
  height: number,
  addres: string,
  mobile: string,
  phone: string,
  sticker?: Sticker
}

interface Sticker {
  packageId: string;
  stickerId: string;
}

const Homework2: NextPage = () => {
  const date = new Date();
  let month = `${date.getMonth()}`;
  let day = `${date.getDay()}`;
  let year = date.getFullYear();
  
  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  const dateString = `${year}-${month}-${day}`;

  const formik = useFormik<Data>({
    onSubmit: (value) => {
      console.log(value);
      formik.setSubmitting(false);
    },
    initialValues: {
      message: 'Test Message.',
      name: 'Miru',
      birthday: dateString,
      height: 160,
      mobile: '',
      phone: '',
      addres: '',
    }
  });

  return (
    <div>
      <Container textAlign={'center'} marginTop={10} maxW="container.xl">
        <h1 className="font-bold text-4xl">杏仁咪嚕</h1>
        <p>
          杏仁咪嚕（日語：杏仁 ミル／あんにん みる Annin Miru），是一名台灣虛擬YouTuber、遊戲實況主，其頻道以遊戲實況、翻唱及直播為主。杏仁咪嚕為個人勢虛擬網紅，同時與Yahoo TV合作，在Yahoo TV上擁有自己的節目「咪嚕咪嚕杏期四」。
        </p>
      </Container>
      <form className="mt-5" onSubmit={formik.handleSubmit}>
        <div className="flex mx-20 flex-wrap">
          <div className="min-w-[400px]">
            <Title style="text-2xl font-bold text-yellow-500" en="Profile" ch="大頭貼" />
            <Image src="/avatar.jpeg" className="select-none m-auto" width={240} height={240} alt="avatar" />
          </div>
          <div className="min-w-[400px] mx-5">
            <Title style="text-2xl font-bold text-yellow-500" en="Contact" ch="個人資料" />
            <FormControl isRequired>
              <InputGroup className="justify-between">
                <FormLabel className="whitespace-nowrap">名字:</FormLabel>
                <Input
                  name="name"
                  className="max-w-[200px]"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.name}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup className="justify-between">
                <FormLabel className="whitespace-nowrap">生日:</FormLabel>
                <Input
                  name="birthday"
                  className="max-w-[200px]"
                  onChange={formik.handleChange}
                  type="date"
                  defaultValue={formik.values.birthday}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup className="justify-between">
                <FormLabel className="whitespace-nowrap">身高:</FormLabel>
                <NumberInput
                  name="height"
                  className="max-w-[200px]"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.height}
                >
                  <NumberInputField />
                </NumberInput>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup className="justify-between">
                <FormLabel className="whitespace-nowrap">電話:</FormLabel>
                <Input 
                  name="phone"
                  className="max-w-[200px]"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.phone}
                />
              </InputGroup>
            </FormControl>            
            <FormControl isRequired>
              <InputGroup className="justify-between">
                <FormLabel className="whitespace-nowrap">行動電話:</FormLabel>
                <Input 
                  name="mobile"
                  className="max-w-[200px]"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.mobile}
                />
              </InputGroup>
            </FormControl>
          </div>
          <div className="min-w-[400px] mx-5">
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea resize="none" onChange={formik.handleChange} defaultValue={formik.values.message} name="message" />
            </FormControl>
          </div>
        </div>
        <div className="flex mx-20 flex-wrap justify-center">
          <div className="flex-grow min-w-[400px]"></div>
          <Button 
            className="flex-grow mx-1 max-w-[400px]"
            style={{ minWidth: 400 }}
            type="submit"
            colorScheme="green" 
            isLoading={formik.isSubmitting} 
            loadingText='Submitting'
          >Submitt</Button>
          <Button className="flex-grow mx-1 max-w-[400px]" style={{ minWidth: 400 }} colorScheme="red">取消</Button>
        </div>
      </form>
    </div>
  );
};

export default Homework2;


