## Redux 공부하기

## 라이브러리 설치하기

- `"redux": "^4.2.1"` : 리덕스 자체
- `"react-redux": "^8.1.1"` : 리액트에서 리덕스를 쉽게 사용하기 위한 메소드들을 호출하기 위한 라이브러리(useSelect, useDispatch)
- `@reduxjs/toolkit` : 리덕스를 더 쉽게 사용하기 위해 재공되는 추가도구모음집

1. 창고만들기 : configStore

   - createStore : 취소선이 생겨요. 쓰지말라고, 튵킷쓰세요. 리액트팀에서 이야기를 해요.
   - legacy_createStore : createStore 를 취소선 없이 사용할 수 있는 메소드

2. 창고구독시키기 : index.js 에 Provider 생성하기
3. 창고에 들어간 리덕스 모듈 만들기 : modules 폴더에서
4. 각각의 컴포넌트에서 해당 상태와 dispatch(Action)을 가져다가 사용하면 됩니다 : useselect(), useDispatch()
