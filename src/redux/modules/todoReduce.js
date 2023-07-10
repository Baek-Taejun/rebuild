// // Duck Patten // 리덕스가 자유분방 // 나름의 규칙 // 정설
// // 01 ActionKey // 동작을 호출하기 위한 키(Key)
// // 02 ACtion Create // ActionKey에 따라서 호출될 동작의 함수호출부
// // 03 initialState // 초기값을 만들어줘요
// // 04 Reduce // ACtion Create에 따라서 실행될 구체적인 행동과, 반환값이 설정되는 곳
// // 리덕스의 하나의 모듈 // todoModule, CounterModule......

// // 01 ActionKey // 휴먼에러를 방지하기 위해서,  Duck Patten 에서는 ActionKey가 여러번 사용된다. 그러기에 변수화 하여 관리한다.
// // 보통 대문자를 씁니다.
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const UPDATE_TODO = "UPDATE_TODO";

// // 02 ACtion Create
// // add_todo > newTodo 추가해야 하니까 어떤 값을 받아와야 되잖아요. payload
// export const add_todo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

// // delete_todo > 삭제할 todo.id를 받아와야 하잖아요. payload
// export const delete_todo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload,
//   };
// };

// // update_todo > 업데이트를 할 todo.id를 받아와야 하잖아요. payload
// export const update_todo = (payload) => {
//   return {
//     type: UPDATE_TODO,
//     payload,
//   };
// };

// // 03 initialState
// const initialState = [
//   {
//     id: 0,
//     title: "title",
//     content: "content",
//     isDone: false,
//   },
//   {
//     id: 1,
//     title: "title1",
//     content: "content1",
//     isDone: false,
//   },
//   {
//     id: 2,
//     title: "title2",
//     content: "content2",
//     isDone: false,
//   },
// ];

// // 04 Reduce
// const todoReduce = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];
//     case DELETE_TODO:
//       return [...state.filter((todo) => todo.id !== action.payload)];
//     case UPDATE_TODO:
//       return state.map((todo) =>
//         todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoReduce;
// export const setTodo = (state) => state.todoReduce;
