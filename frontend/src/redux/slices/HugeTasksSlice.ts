import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import HugeTask from "../../helpers/responseInterfaces/HugeTask";
import {fetchAll, add, remove, update} from '../../helpers/API/HugeTask';
import Simplified from "../../helpers/responseInterfaces/Simplified";

interface HugeTaskState {
    HugeTasks: Simplified[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

export interface TaskPayload {
  task: Simplified,
  idProject: number
}

const initialState: HugeTaskState = {
    HugeTasks: [],
    selected: -1,
    loading: "idle"
};

//____________________________________________
const fetchHugeTasks = createAsyncThunk(
    'HugeTask/fetchAllByProject',
    async (idProject: number) => {
      const response = await fetchAll(idProject);
      return await response.json() as Simplified[];
    }
  )

const addTask = createAsyncThunk(
    'HugeTask/add',
    async({task, idProject}: TaskPayload) => {
        const response = await add(task, idProject);
        return await response.json;
    }
    )

const removeHugeTasks = createAsyncThunk(
    'HugeTask/remove',
    async (task: Simplified) => {
      const response = await remove(task);
      return (await response.json()) as number;
    }
    )

const updateHugeTask = createAsyncThunk(
      'HugeTask/update',
      async (hugeTask: HugeTask) => {
        const response = await update(hugeTask);
        return await response.json();
      }
    )


//____________________________________________
export const HugeTasksSlice = createSlice({
    name: 'hugeTask',
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
           state.HugeTasks = action.payload;
       })
       .addCase(fetchHugeTasks.rejected, (state) => {
           state.loading = 'failed';
       })

       .addCase(addTask.pending, (state) => {
           state.loading = 'pending';
       })
       .addCase(addTask.fulfilled, (state, action) => {
           state.loading = 'succeeded';
           state.HugeTasks.push(action.payload);
       })
       .addCase(addTask.rejected, (state) => {
           state.loading = 'failed';
       })
       .addCase(removeHugeTasks.fulfilled, (state, action) => {
           state.HugeTasks = state.HugeTasks.filter(HT => HT.id !== action.payload);
       })

       .addCase(updateHugeTask.fulfilled, (state, action) => { //can be more optimised!!!! O(n) always
           state.HugeTasks.filter(HT => HT.id !== action.payload.id);
           state.HugeTasks.push(action.payload);
       })
    }
  });

export const {select} = HugeTasksSlice.actions;
export {fetchHugeTasks, removeHugeTasks, updateHugeTask, addTask};
export default HugeTasksSlice.reducer;