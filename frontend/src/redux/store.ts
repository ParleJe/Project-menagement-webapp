import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './slices/projectSlice';
import hugeTaskReducer from './slices/HugeTasksSlice';
import toDoReducer from './slices/ToDoSlice';
import LoggedUserSlice from './slices/LoggedUserSlice';
import UsersSlice from './slices/UsersSlice';

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    hugeTasks: hugeTaskReducer,
    toDos: toDoReducer,
    logged: LoggedUserSlice,
    users: UsersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
