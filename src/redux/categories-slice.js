const { createSlice } = require("@reduxjs/toolkit");

let categoriesSlice=createSlice({
    name:"categories-slice",
    initialState: {data:[],category:[],showModel:true},
    reducers:{
  
        showModel(state){
            state.showModel=true;
        },
        disableModel(state){
            state.showModel=false;
        },

        create(state,action){
            state.data.push(action.payload)
        },
        read(state,action){
            state.data=action.payload
        },
        edit(state,action){
        state.category= state.data.find((element) => element.id == action.payload);
        alert(state.category.id)
        },
        update(state,action){
            let index=state.data.findIndex(
                (element)=>element.id==action.payload.category.id)
             
            state.data[index]=action.payload.category
        },
        delete(state,action){
            
        let fliterData=state.data.filter((element)=>element.id!=action.payload);
        state.data=fliterData
        },
    }
})
export const categoriesReducer=categoriesSlice.reducer;
export const categoriesAction=categoriesSlice.actions;