import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {logIn, register} from '../../helpers/API/UsersAndSecurity';
import UserPost from '../../helpers/responseInterfaces/UserPost';
import SimplifiedUser from '../../helpers/responseInterfaces/SimplifiedUser';
import LoadingStateEnum from '../../helpers/enums/LoadingStateEnum';

enum scopes {
    Project,
    HugeTask,
    None
}



interface LoggedState {
    logged: SimplifiedUser|null,
    token: string,
    scope: scopes,
    errorMsg: string|undefined;
    loading: LoadingStateEnum
};

const initialState: LoggedState = {
    logged: null,
    token: "",
    scope: scopes.None,
    errorMsg: "",
    loading: LoadingStateEnum.IDLE
};

const tryLog = createAsyncThunk(
    'login',
    async (payload: UserPost) => {
      const response = await logIn(payload);
      return await response.json() as UserPost;
    }
  )

const tryRegister = createAsyncThunk(
    'register',
    async (user: UserPost) => {
      const response = await register(user);
      return await response.json() as UserPost;
    }
  )

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {
      setScope: (state, action:PayloadAction<scopes>) => {
        state.scope = action.payload;
      },
      setLoadingState: (state, action:PayloadAction<LoadingStateEnum>) => {
        state.loading = action.payload
      }
    },
    extraReducers: (builder) => {
        builder.addCase(tryLog.pending, (state) => {
            state.loading = LoadingStateEnum.PENDING;
        })
        .addCase(tryRegister.pending, (state) => {
            state.loading = LoadingStateEnum.PENDING
        })
        .addCase(tryRegister.rejected, (state, payload) => {
            state.loading = LoadingStateEnum.FAILED;
            state.errorMsg = payload.error.message;

        })
        .addCase(tryLog.rejected, (state, response) => {
            state.loading = LoadingStateEnum.FAILED;
            state.errorMsg = response.error.message;
        })
        .addCase(tryRegister.fulfilled, (state) => {
            state.loading = LoadingStateEnum.SUCCEEDED;
        })
        .addCase(tryLog.fulfilled, (state, response) => {
            const payload: UserPost = response.payload;
            state.logged = {id: payload.id!, name: payload.name!, surname: payload.surname!};
            state.token = response.payload.token!
            state.loading = LoadingStateEnum.SUCCEEDED;
        })
    }
});

export const {setScope} = loggedUserSlice.actions;
export {tryLog, tryRegister, scopes};
export default loggedUserSlice.reducer;