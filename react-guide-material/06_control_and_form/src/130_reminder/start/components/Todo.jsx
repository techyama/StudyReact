import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  // 初期値
  const defaultTodos = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  // stateの定義
  const [todosList, setTodosList] = useState(defaultTodos);

  const deleteTodo = (id) => {
    // 引数のidと一致するもの以外で配列作成
    const newTodosList = todosList.filter((todos) => {
      return todos.id !== id;
    });

    setTodosList(newTodosList);
  };

  const createTodo = (todo) => {
    // 引数のtodoを配列に追加
    setTodosList([...todosList, todo]);
  }

  return (
    <>
      <List todosList={todosList} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;