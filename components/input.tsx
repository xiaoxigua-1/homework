import { NextPage } from 'next';
import { useState } from 'react';
import { Input } from '@chakra-ui/react';


interface Input {
  name?: string;
  value: string;
  regex?: RegExp;
}

const NewInput: NextPage<Input> = ({ name, value, regex }) => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <div className="flex justify-between mt-2">
      {name ? <span className="whitespace-nowrap">{name}:</span> : <div className="flex-grow"></div>}
      <div className="w-[320px]">
        <Input
          isInvalid={isInvalid}
          defaultValue={value}
          errorBorderColor='crimson'
          type="text"
          size="sm"
          onChange={(e) => {
            setIsInvalid(!regex?.test(e.target.value) as boolean)
          }}
        />
      </div>
    </div>
  );
};

export default NewInput;