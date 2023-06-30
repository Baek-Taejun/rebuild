import './App.css';
import React from 'react';
import TodoLayout from "./components/TodoLayout";
import { useTodo } from "./hooks/useTodo";
import Content from "./components/Content";

function App() {
  const{
    todo,
    title,
    content,
    addTodo,
    deleteTodo,
    makeDone,
    onChangeTitleHandle,
    onChangeContentHandle,
  } = useTodo();

 
    return (
      <div>

      <Content
        title={title}
        content={content}
        onChangeTitleHandle={onChangeTitleHandle}
        onChangeContentHandle={onChangeContentHandle}
        addTodo={addTodo}
      />

        <div>
        <h2>바쁨🔥</h2>
          <TodoLayout
            todo={todo}
            deleteTodo={deleteTodo}
            makeDone={makeDone}
            isDone={false}
          />
      
      </div>

        <div>
        <h2>끝 냠냠냠🎉</h2> 
          <TodoLayout
            todo={todo}
            deleteTodo={deleteTodo}
            makeDone={makeDone}
            isDone={true}
          />
  
      </div>

      </div>
    );
  
        
    }



  
export default App;
