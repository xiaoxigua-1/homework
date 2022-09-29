import { NextPage } from 'next';

interface Input {
  name: string;
  value: string;
}

const Input: NextPage<Input> = ({ name, value }) => {
  return (
    <div className="flex justify-between mt-2">
      <p>{name}:</p>
      <input type="text" value={value} className="border rounded-sm focus:outline-cyan-400" readOnly={true} />
    </div>
  );
};

export default Input;