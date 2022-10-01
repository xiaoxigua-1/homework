import { NextPage } from "next";
import { Select } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from "react";

interface MySelect {
  name: string;
  options: string[];
  setValue?: Dispatch<SetStateAction<string>>;
}

const MySelect: NextPage<MySelect> = ({ options, name, setValue }) => {
  return (
    <div className="flex justify-between mt-2">
      <span className="whitespace-nowrap">{name}:</span>
      <div className="w-[320px]">
        <Select className="w-28" size="sm" onChange={e => setValue ? setValue!!(e.target.value) : null}>
          {options.map(optionStr => <option key={optionStr} value={optionStr}>{optionStr}</option>)}
        </Select>
      </div>
    </div>
  );
};

export default MySelect;
