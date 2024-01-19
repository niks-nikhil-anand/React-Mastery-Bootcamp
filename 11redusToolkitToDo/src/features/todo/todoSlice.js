import {createSlice , nanoid} from './@redux/toolkit'


const initialState = {
    todos : [{
        id : 1 ,
        text : "Hello World"
    }]
}


export const todoSlice = createSlice({
    name : 'todo',
    initialState ,
    reducers : {
        addTodo : (state , action) => {
          const   todo = {
                id : nanoid(),
                 text : action.payload 
            }
        } ,
        removeTodo : () => {}
    }
})
