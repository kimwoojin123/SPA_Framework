'use client'

import React, { useState } from 'react'
import studentList from './data/students';
import SideNav from './ui/sideNav';
import Content from './ui/content';
import ActionForm from './ui/form';



export default function Home() {

  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [advantage, setAdvantage] = useState('');
  
  const handleClick = (student: any) => {
    setSelectedStudent(student);
    setName(student.name);
    setIntroduce(student.introduce);
    setAdvantage(student.advantage);
  };

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const findStudent = studentList.find(
      (student) => student.name === name
    );
    if (findStudent) {
      setSelectedStudent(findStudent);
      setName(findStudent.name);
      setIntroduce(findStudent.introduce);
      setAdvantage(findStudent.advantage);
    } else {
      setSelectedStudent(null);
      setIntroduce('');
      setAdvantage('');
      alert('해당하는 학생이 없습니다.')
    }
  };

  return (
    <div className="w-lvw h-lvh flex justify-center items-center">
      <SideNav studentList={studentList} handleStudentClick={handleClick} />
      <div className="h-3/4 border"></div>
      <div>
      <Content selectedStudent={selectedStudent} introduce={introduce} advantage={advantage} />
      <ActionForm setName={setName} handleFormSubmit={handleSubmit} />
      </div>
    </div>
  );
}