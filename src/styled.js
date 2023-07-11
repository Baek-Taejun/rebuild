import { styled } from "styled-components";

const CardLists = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 20px;
`;

const CardButton = styled.button`
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  background-color: white;
  width: 150px;
  height: 30px;
  margin-right: 10px;
  font-size: 15px;
  cursor: pointer;
`;

const TitleInput = styled.div`
  border: 2px solid #238080;
  border-radius: 10px;
  background: white;
  padding: 10px;
  font-size: 18px;
  margin-left: 20px;
  width: 300px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  background-color: #eeeeee;
  border-radius: 10px;
  span {
    margin-left: 50px;
    font-size: large;
    font-weight: 900;
  }
  input {
    border: 1px solid #ccc;
    border-radius: 10px;
    background: white;
    padding: 10px;
    font-size: 18px;
    margin-left: 20px;
    width: 300px;
  }
  button {
    border: none;
    border-radius: 10px;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    font-size: 18px;
    margin-left: 20px;
    cursor: pointer;
  }
`;

export { CardButton, CardLists, TitleInput, ContentBox };
