import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import HugeTask from "../../helpers/responseInterfaces/HugeTask";
import {fetchAll, add, remove, update} from '../../helpers/API/hugeTask';

interface HugeTaskState {
    HugeTasks: HugeTask[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

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
      return await response.json();
    }
  )

const addHugeTask = createAsyncThunk(
    'HugeTask/add',
    async(hugeTask: HugeTask) => {
        const response = await add(hugeTask.id, hugeTask);
        return await response.json;
    }
    )

const removeHugeTasks = createAsyncThunk(
    'HugeTask/fetchAllByProject',
    async (hugeTask: HugeTask) => {
      const response = await remove(hugeTask.idProject, hugeTask.id);
      return await response.json();
    }
    )

const updateHugeTask = createAsyncThunk(
      'HugeTask/update',
      async (hugeTask: HugeTask) => {
        const response = await update(hugeTask.idProject, hugeTask.id);
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
           console.log(action.payload);
       })
       .addCase(fetchHugeTasks.rejected, (state) => {
           state.loading = 'failed';
       })

       .addCase(addHugeTask.pending, (state) => {
           state.loading = 'pending';
       })
       .addCase(addHugeTask.fulfilled, (state, action) => {
           state.loading = 'succeeded';
           console.log(action.payload);
           state.HugeTasks.push(action.payload);
       })
       .addCase(addHugeTask.rejected, (state) => {
           state.loading = 'failed';
       })

       .addCase(removeHugeTasks.fulfilled, (state, action) => {
           state.HugeTasks.filter(HT => HT.id !== action.payload);
       })

       .addCase(updateHugeTask.fulfilled, (state, action) => { //can be more optimised!!!! O(n) always
           state.HugeTasks.filter(HT => HT.id !== action.payload.id);
           state.HugeTasks.push(action.payload);
       })
    }
  });

export const {select} = HugeTasksSlice.actions;
export {fetchHugeTasks, removeHugeTasks, updateHugeTask, addHugeTask};
export default HugeTasksSlice.reducer;