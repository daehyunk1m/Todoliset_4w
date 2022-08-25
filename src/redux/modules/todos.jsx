// Action Value 상수
const ADD_TODO = 'ADD_TODO';
const ON_REMOVE = 'ON_REMOVE';
const ON_CHANGE = 'ON_CHANGE';

// Action Creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload,
    };
};

export const onRemove = (payload) => {
    return {
        type: ON_REMOVE,
        payload: payload,
    };
};

export const onChange = (payload) => {
    return {
        type: ON_CHANGE,
        payload: payload,
    };
};

// default state
const initialState = {
    todos: [
        {
            id: 1,
            title: '리액트 공부하기',
            desc: '리액트 기초를 공부해 봅시다.',
            isDone: false,
        },
        {
            id: 2,
            title: '리액트 공부했죠?',
            desc: '리액트 너무 어렵네요.',
            isDone: true,
        },
    ]
}
    
//reducer === 변화를 일으키는 함수
const todos = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload],
            };
            
        case ON_CHANGE:
            // Array.map
            return {
               todos: state.todos.map((todo) => {
                return todo.id === action.payload? {...todo, isDone: !todo.isDone} : todo
               })
            };
        case ON_REMOVE:
            return {
                //Array.filter
                todos: [state.todos.filter((todo) => todo.id !== action.payload)],
            };  
        default :
            return state;
    }
}

export default todos;