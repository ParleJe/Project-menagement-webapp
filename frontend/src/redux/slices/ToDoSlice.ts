import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setTextRange } from 'typescript';
import {fetchAll, add, remove, update} from '../../helpers/API/toDo';
import HugeTask from '../../helpers/responseInterfaces/HugeTask';
import ToDo from '../../helpers/responseInterfaces/ToDo';

interface toDoState {
    toDos: ToDo[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

const initialState: toDoState = {
    toDos: [],
    selected: -1,
    loading: "idle"
};

const addToDo = createAsyncThunk(
    'toDo/add',
    async (toDo: ToDo) => {
      const response = await add(toDo);
      return await response.json();
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
    async (toDo: ToDo) => {
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
            state.loading= 'pending';
        })
        .addCase(fetchAllToDo.fulfilled, (state, action) => {
            console.log(action.payload);
            state.toDos = action.payload;
            state.loading = 'succeeded';
        })
        .addCase(fetchAllToDo.rejected, (state) => {
            state.loading = 'failed';
        })

        .addCase(addToDo.fulfilled, (state, action) => {
            console.log(action.payload);
            state.toDos.push(action.payload);
            state.loading = 'succeeded';
        })
        .addCase(addToDo.rejected, (state) => {
            state.loading = 'failed';
        })
        .addCase(removeToDo.fulfilled, (state, action) => {
            console.log(action.payload);
            state.toDos.filter(TD => TD.id != action.payload);
            state.loading = 'succeeded';
        })
        .addCase(updateToDo.fulfilled, (state, action) => {
            console.log(action.payload);
            state.toDos.filter(TD => TD.id != action.payload.id);
            state.toDos.push(action.payload);
            state.loading = 'succeeded';
        })
    }
});

export const {select, clearArr} = projectSlice.actions;
export {fetchAllToDo, removeToDo, addToDo, updateToDo};
export default projectSlice.reducer;