import React from 'react';
import { ContentBox } from '../styled'
import {useTodo} from '../hooks/useTodo'

const Content = () => {
    const{   
        title,
        content,
        addTodo,
        onChangeTitleHandle,
        onChangeContentHandle,
      } = useTodo();
    return ( 
        <ContentBox title={title} content={content}>
            <span>제목:</span>
          <input type="text" value={title} onChange={onChangeTitleHandle} />
          <span>내용:</span>
          <input type="text" value={content} onChange={onChangeContentHandle} />
          <button onClick={addTodo}>추가하기</button>
        </ContentBox>
    )
};
export default Content;