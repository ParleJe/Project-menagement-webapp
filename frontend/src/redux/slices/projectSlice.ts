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
  async () => {
    const response = await fetchAll();
    return await response.json();
  }
)

const addProject = createAsyncThunk(
  'projects/addProject',
  async (project:Project) => {
    const response = await add(project);
    return await response.json();
  }
)

const removeProject = createAsyncThunk(
  'projects/removeProjectById',
  async (id:number) => {
    const response = await remove(id);
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
        //TODO map payload
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = "failed";
      })

      .addCase(addProject.fulfilled, (state, action) => {
        state.projects.push(action.payload);
      })
      .addCase(addProject.pending, (state, action) => {
        state.loading = "pending";
      })

      .addCase(removeProject.fulfilled, (state, action) => {
        state.projects.filter(project => project.id !== action.payload);
      })
    }
  });

export const {select} = projectSlice.actions;
export {fetchProjects, addProject, removeProject};
export default projectSlice.reducer;