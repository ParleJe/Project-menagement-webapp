import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
      // projects: projectsReducer,
      // hugeTasks: hugeTasksReducer,
      // smallTasks: smallTasksReducer,
      // toDos: toDosReducer,
    },
  })


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export {};