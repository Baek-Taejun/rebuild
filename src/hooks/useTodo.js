import { useState } from "react";

export const useTodo = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitleHandle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContentHandle = (e) => {
    setContent(e.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      content: content,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  };

  const deleteTodo = (id) => {
    const updateDelete = todo.filter((item) => item.id !== id);
    setTodo(updateDelete);
  };

  const makeDone = (id) => {
    const updateDone = todo.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTodo(updateDone);
  };

  return {
    todo,
    title,
    content,
    setTitle,
    setTodo,
    setContent,
    addTodo,
    deleteTodo,
    makeDone,
    onChangeContentHandle,
    onChangeTitleHandle,
  };
};
