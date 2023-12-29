import React from 'react';

type SideNav = {
  studentList: { name: string }[];
  handleStudentClick: (student: any) => void;
};

export default function SideNav({ studentList, handleStudentClick }: SideNav) {
  return (
    <div>
      <ul className='w-32'>
        {studentList.map((student, index) => (
          <li className="cursor-pointer h-10" key={index} onClick={() => handleStudentClick(student)}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}