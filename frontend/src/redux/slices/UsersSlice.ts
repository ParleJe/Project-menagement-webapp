import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllFromProject } from '../../helpers/API/UsersAndSecurity';
import User from '../../helpers/responseInterfaces/User';

interface toDoState {
    users: User[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

const initialState: toDoState = {
    users: [],
    selected: -1,
    loading: "idle"
};

const fetchFromProject = createAsyncThunk(
    'users/fromProject',
    async (idProject: number) => {
        const response = await fetchAllFromProject(idProject);
        return await response.json() as User[];
    }
)

const fetchFromTask = createAsyncThunk(
    'users/fromTask',
    async (idTask: number) => {
        const response = await fetchAllFromProject(idTask);
        return await response.json() as User[];
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      select: (state, action:PayloadAction<number>) => {
        state.selected = action.payload;
      }

      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFromProject.pending, (state) => {
            state.loading= 'pending';
        })
        .addCase(fetchFromTask.pending, (state) => {
            state.loading= 'pending';
        })
        .addCase(fetchFromProject.rejected, (state) => {
            state.loading= 'failed';
        })
        .addCase(fetchFromTask.rejected, (state) => {
            state.loading= 'failed';
        })
        .addCase(fetchFromProject.fulfilled, (state, response) => {
            state.loading= 'succeeded';
            state.users = response.payload;
        })
        .addCase(fetchFromTask.fulfilled, (state, response) => {
            state.loading= 'succeeded';
            state.users = response.payload;
        })
    }
});

export const {select} = usersSlice.actions;
export {fetchFromTask, fetchFromProject};
export default usersSlice.reducer;