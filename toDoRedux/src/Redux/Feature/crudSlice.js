import { createSlice } from '@reduxjs/toolkit'

export const todolistSlice = createSlice({
  name: 'todolist',
  initialState: {
    todolist : JSON.parse(localStorage.getItem("todolistData")) || [], 
  },
  reducers: {
    create : (state, action) => {
        state.todolist.push(action.payload);
        localStorage.setItem("todolistData", JSON.stringify(state.todolist));
    },
    update : (state, action) => {
        const {index, newText} = action.payload;
        state.todolist[index] = newText
        localStorage.setItem("todolistData", JSON.stringify(state.todolist));
    },
    deleteItem :(state, action) => {
        state.todolist.splice(action.payload,1);
        localStorage.setItem("todolistData", JSON.stringify(state.todolist));
    },
    clearAll : (state) => {
        state.todolist = [];
        localStorage.removeItem("todolistData");
    }
  }
})

export const { create,update,deleteItem,clearAll } = todolistSlice.actions

export default todolistSlice.reducer