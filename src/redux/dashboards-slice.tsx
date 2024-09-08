import { createSlice } from '@reduxjs/toolkit';
import { DashboardsState } from '../types';
import {
  fetchDashboards,
  addDashboard,
  deleteDashboard,
  editDashboard,
} from '../redux/dashboards-operations';

const initialState: DashboardsState = {
  dashboards: [],
  loading: false,
  addingDashboard: false,
};

const dashboardsSlice = createSlice({
  name: 'dashboards',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDashboards.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchDashboards.rejected, (state, action) => {
      state.loading = false;
      console.error('Failed to fetch dashboards:', action.error.message);
    });
    builder.addCase(fetchDashboards.fulfilled, (state, action) => {
      state.dashboards = action.payload;
      state.loading = false;
    });

    builder.addCase(addDashboard.pending, state => {
      state.addingDashboard = true;
    });

    builder.addCase(addDashboard.fulfilled, (state, action) => {
      state.dashboards.push(action.payload);
      state.addingDashboard = false;
    });

    builder.addCase(addDashboard.rejected, state => {
      state.addingDashboard = false;
    });
    builder.addCase(deleteDashboard.fulfilled, (state, action) => {
      state.dashboards = state.dashboards.filter(
        dashboard => dashboard._id !== action.payload
      );
    });

    builder.addCase(editDashboard.fulfilled, (state, action) => {
      const updatedDashboard = action.payload;
      const index = state.dashboards.findIndex(
        dashboard => dashboard._id === updatedDashboard._id
      );
      if (index !== -1) {
        state.dashboards[index] = updatedDashboard;
      }
    });
  },
});

export const dashboardsReducer = dashboardsSlice.reducer;
