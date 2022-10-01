import { NextPage } from "next";
import { Select } from '@chakra-ui/react';

interface MySelect {
  name: string;
  options: string[];
}

const MySelect: NextPage<MySelect> = ({ options, name }) => {
  return (
    <div className="flex justify-between mt-2">
      <span className="whitespace-nowrap">{name}:</span>
      <div className="w-[320px]">
        <Select className="w-28" size="sm">
          {options.map(optionStr => <option key={optionStr}>{optionStr}</option>)}
        </Select>
      </div>
    </div>
  );
};

export default MySelect;
