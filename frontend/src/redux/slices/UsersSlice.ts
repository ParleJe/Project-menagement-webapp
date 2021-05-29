import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllFromProject, addUserToProject } from '../../helpers/API/UsersAndSecurity';
import SimplifiedUser from '../../helpers/responseInterfaces/SimplifiedUser';

interface UserState {
    users: SimplifiedUser[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

const initialState: UserState = {
    users: [],
    selected: -1,
    loading: "idle"
};

const fetchFromTask = createAsyncThunk(
    'users/fromTask',
    async (idTask: number) => {
        const response = await fetchAllFromProject(idTask);
        return await response.json() as SimplifiedUser[];
    }
)

export interface addUserPayload {
    name: string,
    surname: string,
    idProject: number
}

const addToProject = createAsyncThunk(
    'users/addToProject',
    async ({name, surname, idProject}: addUserPayload) => {
        const response = await addUserToProject(name, surname, idProject);
        return await response.json() as SimplifiedUser;
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
        builder.addCase(fetchFromTask.pending, (state) => {
            state.users = [];
            state.loading = 'pending';
        })
        .addCase(fetchFromTask.rejected, (state) => {
            state.loading = 'failed';
        })
        .addCase(fetchFromTask.fulfilled, (state, response) => {
            state.loading = 'succeeded';
            state.users = response.payload;
        })
        .addCase(addToProject.pending, (state) => {
            state.loading = 'pending';
        })
        .addCase(addToProject.fulfilled, (state, response) => {
            state.users.push(response.payload);
            state.loading = 'succeeded';
        })
        .addCase(addToProject.rejected, (state) => {
            state.loading = 'failed';
        })
    }
});

export const {select} = usersSlice.actions;
export {fetchFromTask, addToProject};
export default usersSlice.reducer;