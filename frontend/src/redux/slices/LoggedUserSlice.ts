import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logIn, register } from '../../helpers/API/UsersAndSecurity';
import UserPost from '../../helpers/responseInterfaces/UserPost';
import SimplifiedUser from '../../helpers/responseInterfaces/SimplifiedUser';
import LoadingStateEnum from '../../helpers/enums/LoadingStateEnum';
import SelectedScopeEnum from '../../helpers/enums/SelectedScopeEnum';

interface LoggedState {
  logged: SimplifiedUser | null,
  token: string,
  scope: SelectedScopeEnum,
  errorMsg: string | undefined;
  loading: LoadingStateEnum
};

const initialState: LoggedState = {
  logged: null,
  token: "",
  scope: SelectedScopeEnum.NONE,
  errorMsg: "",
  loading: LoadingStateEnum.IDLE
};

const tryLog = createAsyncThunk(
  'login',
  async (payload: UserPost) => {
    const response = await logIn(payload);
    return await response.json();
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
    setScope: (state, action: PayloadAction<SelectedScopeEnum>) => {
      state.scope = action.payload;
    },
    setLoadingState: (state, action: PayloadAction<LoadingStateEnum>) => {
      state.loading = action.payload;
    },
    logoutUser: (state) => {
      state.token = "";
      state.logged = null;
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
        state.loading = LoadingStateEnum.SUCCEEDED;
        const payload: UserPost = response.payload;
        console.log(response);
        if (response.payload.status > 300 || response.payload.status < 200) {
          return;
        }
        state.logged = { id: payload.id!, name: payload.name!, surname: payload.surname! };
        state.token = response.payload.token!
      })
  }
});

export const { setScope, setLoadingState, logoutUser } = loggedUserSlice.actions;
export { tryLog, tryRegister };
export default loggedUserSlice.reducer;