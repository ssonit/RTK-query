import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogSlice {
  postId: string;
}

const initialState: BlogSlice = {
  postId: '',
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    startEditPost: (state, action: PayloadAction<string>) => {
      state.postId = action.payload;
    },
    cancelEditPost: (state) => {
      state.postId = '';
    },
  },
});

export const { startEditPost, cancelEditPost } = blogSlice.actions;
export default blogSlice.reducer;
