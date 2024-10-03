// App.js
// 전체 애플리케이션 상태를 관리하고 각 컴포넌트를 연결하는 컴포넌트.

import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    // 초기 할일 목록
    {
      id: 1,
      text: "운동가기",
      checked: false,
      date1: new Date().toLocaleDateString(), // 날짜 추가
    },
    {
      id: 2,
      text: "루키즈 수업 듣기",
      checked: false,
      date1: new Date().toLocaleDateString(), // 날짜 추가
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
      date1: new Date().toLocaleDateString(), // 날짜 추가
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
        date: new Date().toLocaleDateString(), // 날짜 추가
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <TodoInsert onInsert={onInsert} />
    </TodoTemplate>
  );
};

export default App;
