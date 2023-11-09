/* eslint-disable array-callback-return */
import { ADD_TODO, DELETE_ALL,SEE_TODO, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../actions";

const initialState=[
    {id: 1, todo: 'Buy Laptop',detail:'on tuesday', duration:'01:24 PM',date:'2023-11-29', completed: false},
    {id: 2, todo: 'Master Redux',detail:'on tuesday', duration:'06:55 PM',date:'2023-11-2', completed: false},
    {id: 3, todo: 'Master React',detail:'on tuesday', duration:'08:39 PM',date:'2023-11-15', completed: true},
];

export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case SEE_TODO:
            return state;
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;
        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray=[];
            state.map((item)=>{
                if(item.id===data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.detail = data.detail;
                    item.duration = data.duration;
                    item.date = data.date;
                    item.completed = data.completed;
                }
                updatedArray.push(item);
            })
            return updatedArray;
        case UPDATE_CHECKBOX:
            let todoArray=[];
            state.map((item)=>{
                if(item.id===action.payload){
                    item.completed = !item.completed;
                }
                todoArray.push(item);
            })
            return todoArray;
        default: return state;
    }
}