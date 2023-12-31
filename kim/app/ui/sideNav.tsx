import React from 'react';

interface SideNavProps {
  studentList: any[];
  name: string;
  onClick: (student: any) => void;
}

const SideNav: React.FC<SideNavProps> = ({ studentList, name, onClick }) => {
  return (
    <div className="h-5/6">
      <ul>
        {studentList.map((student, index) => (
          <li
            className={`flex cursor-pointer ${name === student.name ? 'active' : ''} h-10 w-56 `}
            key={index}
            onClick={() => onClick(student)}
          >
            {name === student.name && (
              <div className="relative top-3 transform -translate-y-1/2 w-2 h-2 bg-slate-600 rounded-full"></div>
            )}
            <div className={`${name === student.name ? 'move' : ''} text-xs`}>{student.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;