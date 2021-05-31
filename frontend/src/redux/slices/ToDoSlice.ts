import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAll, add, remove, update } from '../../helpers/API/toDo';
import Simplified from '../../helpers/responseInterfaces/Simplified';

interface toDoState {
    toDos: Simplified[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

interface ToDoPayload {
    toDo: Simplified,
    idTask: number
}

const initialState: toDoState = {
    toDos: [],
    selected: -1,
    loading: "idle"
};

const addToDo = createAsyncThunk(
    'toDo/add',
    async ({ toDo, idTask }: ToDoPayload, { getState }) => {
        const state = getState() as any;
        const token = state.logged.token;
        const response = await add(toDo, idTask, token);
        return await response.json() as Simplified;
    }
)

const removeToDo = createAsyncThunk(
    'toDo/remove',
    async (id: number, { getState }) => {
        const state = getState() as any;
        const token = state.logged.token;
        const response = await remove(id, token);
        return await response.json() as number;
    }
)

const updateToDo = createAsyncThunk(
    'toDo/update',
    async (toDo: Simplified, { getState }) => {
        const state = getState() as any;
        const token = state.logged.token;
        const response = await update(toDo, token);
        return await response.json();
    }
)

const fetchAllToDo = createAsyncThunk(
    'toDo/fetchAll',
    async (id: number, { getState }) => {
        const state = getState() as any;
        const token = state.logged.token;
        const response = await fetchAll(id, token);
        return await response.json();
    }
)

export const projectSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<number>) => {
            state.selected = action.payload;
        },
        clearArr: (state) => {
            state.selected = -1;
            state.toDos = [];
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllToDo.pending, (state) => {
            state.toDos = [];
            state.loading = 'pending';
        })
            .addCase(fetchAllToDo.fulfilled, (state, action) => {
                state.toDos = action.payload;
                state.loading = 'succeeded';
            })
            .addCase(fetchAllToDo.rejected, (state) => {
                state.loading = 'failed';
                state.toDos = [];
            })

            .addCase(addToDo.fulfilled, (state, action) => {
                state.toDos.push(action.payload);
                state.loading = 'succeeded';
            })
            .addCase(addToDo.rejected, (state) => {
                state.loading = 'failed';
            })
            .addCase(removeToDo.fulfilled, (state, action) => {
                state.toDos = state.toDos.filter(TD => TD.id !== action.payload);
                state.loading = 'succeeded';
            })
            .addCase(updateToDo.fulfilled, (state, action) => {
                state.toDos = state.toDos.filter(TD => TD.id !== action.payload.id);
                state.toDos.push(action.payload);
                state.loading = 'succeeded';
            })
    }
});

export const { select, clearArr } = projectSlice.actions;
export { fetchAllToDo, removeToDo, addToDo, updateToDo };
export default projectSlice.reducer;