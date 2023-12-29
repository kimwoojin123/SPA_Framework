import React from 'react';

type ActionForm = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function ActionForm({ setName, handleFormSubmit }: ActionForm) {
  return (
    <form className="flex flex-col" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Write student's name"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-gray-300" type="submit">Show</button>
    </form>
  );
}