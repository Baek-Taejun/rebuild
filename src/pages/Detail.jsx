import React from 'react'
import { DetailBox } from '../styled'
import { useNavigate, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'
import {setTodo} from '../redux/modules/todoReduce'

function Detail({title,content}) {
  const navigate = useNavigate();
  const id = useParams().id // typeof string  // url 에서 id 추출해올 수 있어요. useLocateion http://www.....com/1?key=valuse // 퀴리스트링 "key=valuse"
  const todo = useSelector(setTodo)
  const findTodo = todo.find(item => item.id === +id)

  // useParams : url에 있는 id 값을 가져오고
  // useSelector : 리덕스 store 특정 모듈의 state 가져오고
  // findTodo : 특정 모듈의 state 배열에서, 해당 url에 있는 id를 가진 요소 하나를 추출하는 

  return (
    <DetailBox>
      <div>
        <p>ID: {findTodo.id}</p>
        <button onClick={()=> {
          navigate("/")
        }}>이전으로</button>
      </div>
      <h2>{findTodo.title}</h2>
      <p>{findTodo.content}</p>
    </DetailBox>
  );
}


export default Detail