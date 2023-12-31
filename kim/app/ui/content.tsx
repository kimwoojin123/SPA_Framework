import React from 'react';

interface ContentProps {
  selectedStudent: any;
  introduce: string;
  advantage: string;
}

const Content: React.FC<ContentProps> = ({ selectedStudent, introduce, advantage }) => {
  return (
    <div>
      <div>
        <p className="text-2xl">{selectedStudent ? selectedStudent.name : ''} 소개</p>&nbsp;
        <div className='text-neutral-400 text-xs w-5/6 break-all '>{introduce}</div>&nbsp;
      </div>&nbsp;
      <div>
        <p className="text-2xl">{selectedStudent ? selectedStudent.name : ''} 장점</p>&nbsp;
        <div className='text-neutral-400 text-xs w-5/6 break-all'>{advantage}</div>
      </div>&nbsp;
    </div>
  );
};

export default Content;