import { configureStore } from '@reduxjs/toolkit'
import  todoReducer  from './Feature/crudSlice';

export default configureStore({
  reducer: {
    todolist : todoReducer,
  },
});