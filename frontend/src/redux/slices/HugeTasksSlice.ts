import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import HugeTask from "../../helpers/classes/HugeTask";
import {fetchAll, fetchById, add, remove, update} from '../../helpers/API/HugeTask';

interface HugeTaskState {
    HugeTasks: HugeTask[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
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
      return await response.json();
    }
  )

  const removeHugeTasks = createAsyncThunk(
    'HugeTask/fetchAllByProject',
    async (HugeTask: HugeTask) => {
      const response = await remove(HugeTask.id, HugeTask.idProject);
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
      builder.addCase(fetchProjects.pending, (state, action) => {
        state.loading = "pending";
      })
      
    }
  });

export const {select} = HugeTasksSlice.actions;
export {fetchProjects, addProject, removeProject};



export default projectSlice.reducer;