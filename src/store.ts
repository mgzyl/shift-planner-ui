import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers.ts';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import loggerMiddleware from "./middleware/loggerMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(loggerMiddleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
