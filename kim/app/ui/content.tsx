import React from 'react';

type Content = {
  selectedStudent: any | null;
  introduce: string;
  advantage: string;
};

export default function Content({ selectedStudent, introduce, advantage }: Content) {
  return (
    <div>
      <div>
        <p>{selectedStudent ? selectedStudent.name : ''} 소개</p>
        <div>{introduce}</div>
      </div>
      <div>
        <p>{selectedStudent ? selectedStudent.name : ''} 장점</p>
        <div>{advantage}</div>
      </div>
    </div>
  );
}