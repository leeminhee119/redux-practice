import { createStore } from 'redux'

const initialState = {
    count: 0,
    
}

/* 액션 타입 정의 */
const INCREASE = 'INCREASE'

/* 액션 생성함수 정의 */
function increase() {
    return {
      type: INCREASE // 액션 객체에는 type 값이 필수입니다.
    };
}

/* 리듀서 만들기 */
function reducer(state = initialState, action: any) {
    // state 의 초깃값을 initialState 로 지정했습니다.
    switch (action.type) {
      case INCREASE:
        return {
          ...state,
          count: state.count + 1
        };
      default:
        return state;
    }
  }

/* 스토어 만들기 */
const store = createStore(reducer);

console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.

// 액션들을 디스패치 해봅시다.
store.dispatch(increase());