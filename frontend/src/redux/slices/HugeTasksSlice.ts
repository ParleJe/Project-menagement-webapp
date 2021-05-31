import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {fetchAll, add, remove, update} from '../../helpers/API/HugeTask';
import Simplified from "../../helpers/responseInterfaces/Simplified";

interface HugeTaskState {
    tasks: Simplified[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export interface TaskPayload {
  task: Simplified,
  idProject: number
}

const initialState: HugeTaskState = {
    tasks: [],
    selected: -1,
    loading: "idle"
};

//____________________________________________
const fetchHugeTasks = createAsyncThunk(
    'Task/fetchAllByProject',
    async (idProject: number, {getState}) => {
      const state = getState() as any;
      const token = state.logged.token;
      const response = await fetchAll(idProject, token);
      return await response.json() as Simplified[];
    }
  )

const addTask = createAsyncThunk(
    'Task/add',
    async({task, idProject}: TaskPayload, {getState}) => {
      const state = getState() as any;
      const token = state.logged.token;
        const response = await add(task, idProject, token);
        return await response.json() as Simplified;
    }
    )

const removeHugeTasks = createAsyncThunk(
    'Task/remove',
    async (task: Simplified, {getState}) => {
      const state = getState() as any;
      const token = state.logged.token;
      const response = await remove(task, token);
      return (await response.json()) as number;
    }
    )

const updateHugeTask = createAsyncThunk(
      'Task/update',
      async (hugeTask: Simplified,{getState}) => {
        const state = getState() as any;
      const token = state.logged.token;
        const response = await update(hugeTask, token);
        return await response.json() as Simplified;
      }
    )


//____________________________________________
export const HugeTasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      select: (state, action:PayloadAction<number>) => {
        state.selected = action.payload;
      }

    },
    extraReducers: (builder) => {
       builder.addCase(fetchHugeTasks.pending, (state) => {
           state.loading = 'pending';
       })
       .addCase(fetchHugeTasks.fulfilled, (state, action) => {
           state.loading = 'succeeded';
           state.tasks = action.payload;
       })
       .addCase(fetchHugeTasks.rejected, (state) => {
           state.loading = 'failed';
           state.tasks = [];
       })

       .addCase(updateHugeTask.pending, (state) => {
        state.loading = 'pending';
       })

       .addCase(addTask.pending, (state) => {
           state.loading = 'pending';
       })
       .addCase(addTask.fulfilled, (state, action) => {
           state.loading = 'succeeded';
           state.tasks.push(action.payload);
       })
       .addCase(addTask.rejected, (state) => {
           state.loading = 'failed';
       })
       .addCase(removeHugeTasks.fulfilled, (state, action) => {
           state.tasks = state.tasks.filter(T => T.id !== action.payload);
       })

       .addCase(updateHugeTask.fulfilled, (state, action) => { //can be more optimised!!!! O(n) always
           state.tasks = state.tasks.filter(T => T.id !== action.payload.id);
           state.tasks.push(action.payload);
           state.loading = 'succeeded';
       })
    }
  });

export const {select} = HugeTasksSlice.actions;
export {fetchHugeTasks, removeHugeTasks, updateHugeTask, addTask};
export default HugeTasksSlice.reducer;