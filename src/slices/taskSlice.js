import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
    currentPage: 0,
    totalPages: 0, // last page
    perPage: 0,
    isLoading: false,
    isLoadingMore: false,
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    getTasks: (
      state,
      //   action: PayloadAction<{ pageNo: number; query?: string }>
      action
    ) => {
      state.data.isLoadingMore = true;
      if (action.payload.pageNo <= 1) {
        state.data.isLoading = true;
      }
    },
    getTasksSuccess: (state, action) => {
      const { list = [], pageData } = action.payload ?? {};
      const currentPage = pageData?.current_page ?? 1;
      state.data = {
        list: currentPage <= 1 ? list : [...state.data.list, ...list],
        currentPage: pageData?.current_page,
        totalPages: pageData?.last_page,
        perPage: pageData?.per_page,
        isLoading: false,
        isLoadingMore: false,
      };
    },
    getTasksFailure: (state, action) => {
      state.data.isLoading = false;
      state.data.isLoadingMore = false;
      state.toastData = {
        type: "failure",
        message: action.payload || "Something went wrong",
      };
    },
  },
});

export const { getTasks, getTasksSuccess, getTasksFailure } = taskSlice.actions;

export default taskSlice.reducer;
