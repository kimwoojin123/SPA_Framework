import React from 'react';

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit, onChange }) => {
  return (
    <form className="flex flex-col w-5/6" onSubmit={onSubmit}>
      <input
        className='pl-6 h-8 rounded-xl'
        type="text"
        placeholder="Write student's name."
        onChange={onChange}
      />&nbsp;
      <button className="bg-gray-300 text-white rounded-xl h-14" type="submit">Show</button>
    </form>
  );
};

export default Form;