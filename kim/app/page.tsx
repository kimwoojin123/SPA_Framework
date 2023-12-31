'use client'
import React, { useState } from 'react';
import studentList from './data/students';
import './globals.css';

export default function Home() {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [advantage, setAdvantage] = useState('');

  const handleStudentClick = (student: any) => {
    setSelectedStudent(student);
    setName(student.name);
    setIntroduce(student.introduce);
    setAdvantage(student.advantage);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const foundStudent = studentList.find(
      (student) => student.name === name
    );
    if (foundStudent) {
      setSelectedStudent(foundStudent);
      setIntroduce(foundStudent.introduce);
      setAdvantage(foundStudent.advantage);
    } else {
      setSelectedStudent(null);
      setIntroduce('');
      setAdvantage('');
      alert('해당하는 학생이 없습니다.');
    }
  };

  return (
    <div className="w-lvw h-lvh flex justify-center items-center">
      <div className="h-5/6">
        <ul>
          {studentList.map((student, index) => (
            <li
              className={`flex cursor-pointer ${name === student.name ? 'active' : ''} h-10 w-56 `}
              key={index}
              onClick={() => handleStudentClick(student)}
            >
              {name === student.name && (
                <div className="relative top-3 transform -translate-y-1/2 w-2 h-2 bg-slate-600 rounded-full"></div>
                )}
                <div className = {`${name === student.name ? 'move' : ''} text-xs`}>{student.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-5/6 w-px bg-gray-300"></div>
      <div className="w-3/5 h-5/6 pl-6">
        <div>
          <p className="text-2xl">{selectedStudent ? selectedStudent.name : ''} 소개</p>&nbsp;
          <div className='text-neutral-400 text-xs w-5/6 break-all '>{introduce}</div>&nbsp;
        </div>&nbsp;
        <div>
          <p className="text-2xl">{selectedStudent ? selectedStudent.name : ''} 장점</p>&nbsp;
          <div className='text-neutral-400 text-xs w-5/6 break-all'>{advantage}</div>
        </div>&nbsp;
        <form className="flex flex-col w-5/6" onSubmit={handleFormSubmit}>
          <input
            className='pl-6 h-8 rounded-xl'
            type="text"
            placeholder="Write student's name."
            onChange={(e) => setName(e.target.value)}
          />&nbsp;
          <button className="bg-gray-300 text-white rounded-xl h-14" type="submit">Show</button>
        </form>
      </div>
    </div>
  );
}