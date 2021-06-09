import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchAllFromProject,
  addUserToProject,
} from '../../helpers/API/UsersAndSecurity';
import LoadingStateEnum from '../../helpers/enums/LoadingStateEnum';
import SimplifiedUser from '../../helpers/responseInterfaces/SimplifiedUser';

interface UserState {
  users: SimplifiedUser[];
  selected: number;
  loading: LoadingStateEnum;
}

const initialState: UserState = {
  users: [],
  selected: -1,
  loading: LoadingStateEnum.IDLE,
};

const fetchFromTask = createAsyncThunk(
  'users/fromTask',
  async (idTask: number, { getState }) => {
    const state = getState() as any;
    const token = state.logged.token;
    const response = await fetchAllFromProject(idTask, token);
    return (await response.json()) as SimplifiedUser[];
  }
);

export interface addUserPayload {
  name: string;
  surname: string;
  idProject: number;
}

const addToProject = createAsyncThunk(
  'users/addToProject',
  async ({ name, surname, idProject }: addUserPayload, { getState }) => {
    const state = getState() as any;
    const token = state.logged.token;
    const response = await addUserToProject(name, surname, idProject, token);
    return (await response.json()) as SimplifiedUser;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<number>) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFromTask.pending, (state) => {
        state.users = [];
        state.loading = LoadingStateEnum.PENDING;
      })
      .addCase(fetchFromTask.rejected, (state) => {
        state.loading = LoadingStateEnum.FAILED;
        state.users = [];
      })
      .addCase(fetchFromTask.fulfilled, (state, response) => {
        state.loading = LoadingStateEnum.SUCCEEDED;
        state.users = response.payload;
      })
      .addCase(addToProject.pending, (state) => {
        state.loading = LoadingStateEnum.PENDING;
      })
      .addCase(addToProject.fulfilled, (state, response) => {
        state.users.push(response.payload);
        state.loading = LoadingStateEnum.SUCCEEDED;
      })
      .addCase(addToProject.rejected, (state) => {
        state.loading = LoadingStateEnum.FAILED;
      });
  },
});

export const { select } = usersSlice.actions;
export { fetchFromTask, addToProject };
export default usersSlice.reducer;
