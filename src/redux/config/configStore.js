// import { legacy_createStore } from "redux";
// import { combineReducers } from "redux";

// const rootReducers = combineReducers({
//   // 모듈에서 만든 모든 리듀서 등록해줄꺼에요.
//   todoReduce: todoReduce,
// });

// const store = legacy_createStore(rootReducers);

// export default store

// 튤킷 : combineReducers + legacy_createStore => 하나로 만들어요. consfigStore

import { configureStore } from "@reduxjs/toolkit";
import todoReduce from "../modules/todoReduce";
import todoSlice from "../modules/todoSlice";

const store = configureStore({
  //combineReducers => configureStore.reducer 넣어준 거에요.
  reducer: { todoReduce, todoSlice },
});

export default store;
