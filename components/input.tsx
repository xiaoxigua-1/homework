import { NextPage } from 'next';
import { useState } from 'react';
import { Input } from '@chakra-ui/react';


interface Input {
  name: string;
  value: string;
}

const NewInput: NextPage<Input> = ({ name, value }) => {
  return (
    <div className="flex justify-between mt-2">
      <span className="whitespace-nowrap">{name}:</span>
      <div className="w-[320px]">
        <Input
          defaultValue={value}
          type="text"
          size="sm"
        />
      </div>
    </div>
  );
};

export default NewInput;