import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './slices/projectSlice';
import hugeTaskReducer from './slices/HugeTasksSlice';
import toDoReducer from './slices/ToDoSlice';

const store = configureStore({
    reducer: {
      projects: projectReducer,
      hugeTasks: hugeTaskReducer,
      toDos: toDoReducer,
    },
  })

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;