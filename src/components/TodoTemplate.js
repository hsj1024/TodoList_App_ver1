// TodoTemplate.js
// 애플리케이션의 레이아웃을 정의하는 컴포넌트.

import "/Users/seojeong/Documents/GitHub/TodoList_App_ver1/src/scss/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  const currentDate = getCurrentDate();
  return (
    <div className="TodoTemplate">
      <div className="app-title">TodoList App</div>
      <div className="date">{currentDate}</div> {/* 날짜와 요일 표시 */}
      <div className="content">{children}</div>
    </div>
  );
};
const getCurrentDate = () => {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  return date.toLocaleDateString("ko-KR", options);
};

export default TodoTemplate;
