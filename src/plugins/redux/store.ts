import { configureStore } from '@reduxjs/toolkit'

import Chart from './slices/chats'

export const store =  configureStore({ reducer:{
    Chart
} })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store