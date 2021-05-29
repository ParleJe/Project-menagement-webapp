import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {fetchAll, add, remove, update} from '../../helpers/API/toDo';
import Simplified from '../../helpers/responseInterfaces/Simplified';
import ToDo from '../../helpers/responseInterfaces/ToDo';

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
    async ({toDo, idTask}: ToDoPayload) => {
      const response = await add(toDo, idTask);
      return await response.json() as Simplified;
    }
  )

const removeToDo = createAsyncThunk(
    'toDo/remove',
    async (id: number) => {
        const response = await remove(id);
        return await response.json();
    }
)

const updateToDo = createAsyncThunk(
    'toDo/update',
    async (toDo: Simplified) => {
        const response = await update(toDo);
        return await response.json();
    }
)

const fetchAllToDo = createAsyncThunk(
    'toDo/fetchAll',
    async (id: number) => {
        const response = await fetchAll(id);
        return await response.json();
    }
)

export const projectSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
      select: (state, action:PayloadAction<number>) => {
        state.selected = action.payload;
      },
      clearArr:(state) => {
          state.selected = -1;
          state.toDos = [];
      }
      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllToDo.pending, (state) => {
            state.toDos = [];
            state.loading= 'pending';
        })
        .addCase(fetchAllToDo.fulfilled, (state, action) => {
            state.toDos = action.payload;
            state.loading = 'succeeded';
        })
        .addCase(fetchAllToDo.rejected, (state) => {
            state.loading = 'failed';
        })

        .addCase(addToDo.fulfilled, (state, action) => {
            state.toDos.push(action.payload);
            state.loading = 'succeeded';
        })
        .addCase(addToDo.rejected, (state) => {
            state.loading = 'failed';
        })
        .addCase(removeToDo.fulfilled, (state, action) => {
            state.toDos.filter(TD => TD.id !== action.payload);
            state.loading = 'succeeded';
        })
        .addCase(updateToDo.fulfilled, (state, action) => {
            state.toDos.filter(TD => TD.id !== action.payload.id);
            state.toDos.push(action.payload);
            state.loading = 'succeeded';
        })
    }
});

export const {select, clearArr} = projectSlice.actions;
export {fetchAllToDo, removeToDo, addToDo, updateToDo};
export default projectSlice.reducer;