students.ts 파일에 참조 객체 데이터를 만들고

page.tsx에서 참조를 받아 해당 데이터를 상태로 하여 변경사항 감지를 useState훅과 함수를 이용하여 

클릭시, 폼 제출시 상태변경에 사용해주었음.

구성은 사이드내비게이션 영역, 컨텐츠(학생소개,장점)영역, 검색 폼 영역을 구성하였고,

이것을 ui폴더내의 sideNav.tsx, content.tsx, form.tsx 컴포넌트로 나누어 page.tsx에 마운팅 해주었다. 
