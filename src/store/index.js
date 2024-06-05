import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from './changeTheme'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})
