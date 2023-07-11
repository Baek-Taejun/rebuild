import '../App.css';
import React from 'react';
import TodoLayout from "../components/TodoLayout";
import Content from "../components/Content";


function Home() {

    return (
      <div>
      <Content/>
        <div>
        <h2>바쁨🔥</h2>
          <TodoLayout
            isDone={false}
          />    
        </div>
        <div>
        <h2>끝 냠냠냠🎉</h2> 
          <TodoLayout
            isDone={true}
          />
        </div>
      </div>
    ); 
    }
// 아토믹 디자인 패던 >> 템플릿(레이아웃)

  
export default Home;
