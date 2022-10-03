import { NextPage } from 'next';
import { Dispatch, SetStateAction, useState } from 'react';
import { Input } from '@chakra-ui/react';


interface Input {
  name?: string;
  value: string;
  regex?: RegExp;
  defaultIsInvalid?: boolean;
  setValue?: Dispatch<SetStateAction<string>>
}

const NewInput: NextPage<Input> = ({ name, value, regex, setValue, defaultIsInvalid }) => {
  const [isInvalid, setIsInvalid] = useState(defaultIsInvalid ?? false);

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
            setIsInvalid(regex ? !regex?.test(e.target.value) : false);
            setValue ? setValue(e.target.value) : null;
          }}
        />
      </div>
    </div>
  );
};

export default NewInput;