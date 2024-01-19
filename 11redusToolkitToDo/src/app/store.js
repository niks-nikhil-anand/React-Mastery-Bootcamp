import {configureStore} from './@redux/toolkit'
import todoReducer from '../features/todoSlice'



export const store = configureStore({
    reducer : todoReducer
})

