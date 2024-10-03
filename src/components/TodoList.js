// TodoList.js
// 할 일 목록을 보여주는 컴포넌트

import TodoListItem from "./TodoListItem";
import "/Users/seojeong/Documents/GitHub/TodoList_App_ver1/src/scss/TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
