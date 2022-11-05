import { NextPage } from 'next';
import { useFormik } from 'formik';
import { Button, Container, FormControl, FormLabel, Input, InputGroup, NumberInput, NumberInputField, Select, Switch, Textarea, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import Title from '../components/title';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';

interface Range {
  start: number,
  end: number,
}

type packageMapType = {
  [key: number]: Range
} 
const packageMap: packageMapType = {
  446: {
    start: 1988,
    end: 2027,
  },
  789: {
    start: 10855,
    end: 10894
  },
  1070: {
    start: 17839,
    end: 17878,
  },
  6136: {
    start: 10551376,
    end: 10551399,
  },
  6325: {
    start: 10979904,
    end: 10979927
  },
  6359: {
    start: 11069848,
    end: 11069871
  },
  6362: {
    start: 11087920,
    end: 11087943,
  },
  6370: {
    start: 11088016,
    end: 11088039,
  },
  6632: {
    start: 11825374,
    end: 11825397,
  },
  8515: {
    start: 16581242,
    end: 16581265,
  },
  8522: {
    start: 16581266,
    end: 16581289,
  },
  8525: {
    start: 16581290,
    end: 16581313,
  },
  11537: {
    start: 52002734,
    end: 52002773,
  },
  11538: {
    start: 51626494,
    end: 51626533,
  },
  11539: {
    start: 52114110,
    end: 52114149,
  },
}

interface Data {
  message: string;
  name: string,
  birthday: string,
  height: number,
  addres: string,
  mobile: string,
  phone: string,
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
    onSubmit: async(value) => {
      const uri = "http://richienitro.net:8443";
      const formData = new FormData();
      formData.append('name', value.name);
      formData.append('height', `${value.height}`);
      formData.append('addres', value.addres);
      formData.append('mobile', value.mobile);
      formData.append('message', value.message);
      formData.append('birthday', value.birthday);
      formData.append('phone', value.phone);
      console.log(value);
      if (sendSticker) {
        formData.append('packageId', value.packageId);
        formData.append('stickerId', value.stickerId);
      }
      const req = await axios({
        method: 'POST',
        url: `${uri}/line`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      req.request();
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
      packageId: '446',
      stickerId: '1988'
    }
  });
  const [sendSticker, setSendSticker] = useState(false);
  const [packageId, setPackageId] = useState(446);

  return (
    <div>
      <Container textAlign={'center'} marginTop={10} maxW="container.xl">
        <h1 className="font-bold text-4xl">杏仁咪嚕</h1>
        <p>
          杏仁咪嚕（日語：杏仁 ミル／あんにん みる Annin Miru），是一名台灣虛擬YouTuber、遊戲實況主，其頻道以遊戲實況、翻唱及直播為主。杏仁咪嚕為個人勢虛擬網紅，同時與Yahoo TV合作，在Yahoo TV上擁有自己的節目「咪嚕咪嚕杏期四」。
        </p>
      </Container>
      <form className="mt-5" onSubmit={formik.handleSubmit}>
        <div className="flex mx-20 flex-wrap justify-between">
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
            <FormControl className="flex mt-3">
              <FormLabel>Send Sticker</FormLabel>
              <Switch
                size="md"
                isChecked={sendSticker}
                onChange={() => {
                  setSendSticker(!sendSticker);
                }}
              />
            </FormControl>
            {sendSticker ? (
              <FormControl>
                <FormLabel>Package</FormLabel>
                <Select
                  name="packageId"
                  onChange={(e) => {
                    formik.handleChange(e);
                    console.log(e.target.value);
                    setPackageId(Number(e.target.value));
                  }}
                >
                  {Object.keys(packageMap).map(key => (
                    //@ts-ignore
                    <option key={key} value={key}>{`${key} (${packageMap[key].start}-${packageMap[key].end})`}</option>
                  ))}
                </Select>
                <FormLabel>Sticker</FormLabel>
                <NumberInput
                  defaultValue={packageMap[packageId].start}
                  min={packageMap[packageId].start}
                  max={packageMap[packageId].end}
                  onChange={(value) => {
                    formik.setFieldValue('stickerId', value);
                  }}
                >
                  <NumberInputField/>
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            ) : null}
          </div>
        </div>
        <div className="flex mx-20 flex-wrap justify-between">
          <div className="flex-grow min-w-[400px] max-w-[400px]"></div>
          <Button 
            className="flex-grow mx-1 max-w-[400px]"
            style={{ minWidth: 400 }}
            type="submit"
            colorScheme="green" 
            isLoading={formik.isSubmitting} 
            loadingText='Submitting'
          >Submitt</Button>
          <Button className="flex-grow mx-1 max-w-[400px]" style={{ minWidth: 400 }} colorScheme="red">Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default Homework2;


