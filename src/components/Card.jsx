import { Link } from 'react-router-dom';
import { CardButton,TitleInput } from '../styled'
const Card = ({ id, title, isDone, content, deleteTodo, makeDone }) => {

    return (
      <TitleInput key={id}>
        <Link to={`/detail/${id}`}>상세보기</Link>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
        <CardButton color="#007bff" onClick={() => deleteTodo(id)}>삭제하기</CardButton>
        <CardButton color="#ff0000" onClick={() => makeDone(id)}>{isDone ? "취소" : "완료"}</CardButton>
        </div>
      </TitleInput>
    );
  };  
  
  export default Card;
  