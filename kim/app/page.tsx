'use client'

import React, { useState } from 'react';
import studentList from './data/students';
import './globals.css';
import Content from './ui/content';
import Form from './ui/form';
import SideNav from './ui/sideNav';


/**
 * @file Home 페이지
 * @description Home 페이지 컴포넌트
 */


export default function Home() {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [advantage, setAdvantage] = useState('');




    /**
   * 학생을 클릭했을 때 해당 학생의 자료들 설정.
   * @param {Object} student - 클릭된 학생 정보
   * @returns {void}
   */

  const handleStudentClick = (student: any) => {
    setSelectedStudent(student);
    setName(student.name);
    setIntroduce(student.introduce);
    setAdvantage(student.advantage);
  };



    /**
   * 폼 submit시 자료객체에서 입력한 이름과 일치하는 소개와 장점 표시.
   * @param {React.FormEvent<HTMLFormElement>} event - 폼 이벤트 객체
   * @returns {void}
   */

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
      {/* 사이드 내비게이션 영역 */}
      <SideNav studentList={studentList} name={name} onClick={handleStudentClick} />

      {/* 수직 분할선 */}
      <div className="h-5/6 w-px bg-gray-300"></div>

      {/* 콘텐츠 영역 */}
      <div className='w-3/5 pl-6'>

        {/* 학생 정보 */}
        <Content selectedStudent={selectedStudent} introduce={introduce} advantage={advantage} />

        {/* 검색 폼 */}
        <Form onSubmit={handleFormSubmit} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
}