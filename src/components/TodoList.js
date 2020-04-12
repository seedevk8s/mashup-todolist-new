import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <TodoListBlock>
        <TodoItem text="프로젝트 대비" done={true} />
        <TodoItem text="리액트 파악 정리" done={true} />
        <TodoItem text="자바 fc 내용 파악 정리" done={false} />
        <TodoItem text="node.js 수강여부 판단" done={false} />
      </TodoListBlock>
    </div>
  );
}

export default TodoList;
