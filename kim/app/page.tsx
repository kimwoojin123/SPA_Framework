'use client'
import React, { useState } from 'react';
import studentList from './data/students';
import './globals.css';

export default function Home() {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [advantage, setAdvantage] = useState('');
  const [clickedName, setClickedName] = useState<string | null>(null);

  const handleStudentClick = (student: any) => {
    setSelectedStudent(student);
    setName(student.name);
    setIntroduce(student.introduce);
    setAdvantage(student.advantage);
    setClickedName(student.name); // 클릭한 이름 설정
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const foundStudent = studentList.find(
      (student) => student.name === name
    );
    if (foundStudent) {
      setSelectedStudent(foundStudent);
      setName(foundStudent.name);
      setIntroduce(foundStudent.introduce);
      setAdvantage(foundStudent.advantage);
      setClickedName(foundStudent.name); // 이름을 입력한 경우 설정
    } else {
      setSelectedStudent(null);
      setIntroduce('');
      setAdvantage('');
      alert('해당하는 학생이 없습니다.');
    }
  };

  return (
    <div className="w-lvw h-lvh flex justify-center items-center">
      <div>
        <ul>
          {studentList.map((student, index) => (
            <li
              className={`cursor-pointer ${clickedName === student.name ? 'active' : ''} h-10 w-56`}
              key={index}
              onClick={() => handleStudentClick(student)}
            >
              <span className={`${clickedName === student.name ? 'move-right' : ''}`}>
                {selectedStudent && selectedStudent.name === student.name ? '· ' : ''}
                {student.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-3/4 border"></div>
      <div>
        <div>
          <p>{selectedStudent ? selectedStudent.name : ''} 소개</p>
          <div>{introduce}</div>
        </div>
        <div>
          <p>{selectedStudent ? selectedStudent.name : ''} 장점</p>
          <div>{advantage}</div>
        </div>
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Write student's name"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Show</button>
        </form>
      </div>
    </div>
  );
}