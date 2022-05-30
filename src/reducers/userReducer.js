import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    name :"Ramesh",
    age:"20",
    joke:""
}

const userReducer = createReducer(initialState,(builder)=>{
    builder.addCase("UPDATE_NAME_SUCCESS",(state,action)=>{
        state.name = action.payload
    })
    builder.addCase("UPDATE_AGE_SUCCESS",(state,action)=>{
        
        state.age = action.payload
    })
    builder.addCase("JOKE_SUCCESS",(state,action)=>{
        
        state.joke = action.payload
    })
})

export default userReducer