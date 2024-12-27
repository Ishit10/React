
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const todosCollection = collection(db, 'todos');


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const getdoc = await getDocs(todosCollection);
  return getdoc.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  const docRef = await addDoc(todosCollection, { text, completed: false });
  return { id: docRef.id, text };
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, text }) => {
  const todoRef = doc(db, 'todos', id);
  await updateDoc(todoRef, { text });
  return { id, text };
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await deleteDoc(doc(db, 'todos', id));
  return id;
});


const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const { id, text } = action.payload;
        const todo = state.items.find((todo) => todo.id === id);
        if (todo) todo.text = text;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
