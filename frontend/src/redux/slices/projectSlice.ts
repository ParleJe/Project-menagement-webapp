import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Project from "../../helpers/responseInterfaces/Project";
import {fetchAll, add, remove} from "../../helpers/API/projects"


interface projectState {
    projects: Project[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

const initialState: projectState = {
    projects: [],
    selected: -1,
    loading: "idle"
};

const fetchProjects = createAsyncThunk(
  'projects/fetchAll',
  async (idUser: number,{getState}) => {
    const state = getState() as any;
    const token = state.logged.token;
    const response = await fetchAll(idUser, token);
    return (await response.json()) as Project[];
  }
)

const addProject = createAsyncThunk(
  'projects/addProject',
  async (project:Project, {getState}) => {
    const state = getState() as any;
    const token = state.logged.token;
    const response = await add(project, token);
    return await response.json() as Project;
  }
)

const removeProject = createAsyncThunk(
  'projects/removeProjectById',
  async (id:number, {getState}) => {
    const state = getState() as any;
    const token = state.logged.token;
    const response = await remove(id, token);
    return await response.json();
  }
)

export const projectSlice = createSlice({
    name: 'project',
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
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = "failed";
        state.projects = [];
      })

      .addCase(addProject.fulfilled, (state, action) => {
        state.projects.push(action.payload);
        state.loading = "succeeded";
      })
      .addCase(addProject.pending, (state, action) => {
        state.loading = "pending";
      })

      .addCase(removeProject.fulfilled, (state, action) => {
        state.projects = state.projects.filter(project => project.id !== action.payload);
      })
    }
  });

export const {select} = projectSlice.actions;
export {fetchProjects, addProject, removeProject};
export default projectSlice.reducer;