import React from 'react';
import './sideNav.css';

type Student = {
  name: string;
  introduce: string;
  advantage: string;
};

type SideNavProps = {
  studentList: Student[];
  handleStudentClick: (student: Student) => void;
  selectedStudent: Student | null;
};

export default function SideNav({ studentList, handleStudentClick, selectedStudent }: SideNavProps) {
  return (
    <div>
      <ul className='w-32'>
        {studentList.map((student, index) => (
          <li
            key={index}
            className={`cursor-pointer h-10`}
            onClick={() => handleStudentClick(student)} // Pass the whole 'student' object
          >
            {selectedStudent && selectedStudent.name === student.name ? '· ' : ''}{student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}