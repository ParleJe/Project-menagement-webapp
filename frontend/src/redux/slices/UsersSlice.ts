import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllFromProject, fetchAllFromTask } from '../../helpers/API/UsersAndSecurity';
import SimplifiedUser from '../../helpers/responseInterfaces/SimplifiedUser';

interface toDoState {
    users: SimplifiedUser[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

const initialState: toDoState = {
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
            state.loading= 'pending';
        })
        .addCase(fetchFromTask.rejected, (state) => {
            state.loading= 'failed';
        })
        .addCase(fetchFromTask.fulfilled, (state, response) => {
            state.loading= 'succeeded';
            state.users = response.payload;
        })
    }
});

export const {select} = usersSlice.actions;
export {fetchFromTask};
export default usersSlice.reducer;