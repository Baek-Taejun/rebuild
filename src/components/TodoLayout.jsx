import React from 'react';
import Card from "./Card";
import { CardLists } from '../styled'

function TodoLayout({ todo, deleteTodo, makeDone, isDone }) {
  return (
    <div>
   <CardLists>
      {todo.map((item) => {
        if (item.isDone === isDone) {
          return (
            <Card
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            deleteTodo={deleteTodo}
            makeDone={makeDone}
            isDone={isDone}
            />
          );
        }
        return null;
      })}
</CardLists>
    </div>
  );
}

export default TodoLayout;
