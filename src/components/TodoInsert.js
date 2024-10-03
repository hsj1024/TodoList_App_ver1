// TodoInsert.js
// 새로운 할 일을 추가하는 입력 폼을 제공하는 컴포넌트.

import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "/Users/seojeong/Documents/GitHub/TodoList_App_ver1/src/scss/TodoInsert.scss";
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요 : "
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
