import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData :[],
    userInfo:null,
};

export const BazerSlice = createSlice({
    name:"bazer",
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            const item = state.productData.find((item)=>item._id === action.payload._id);

            if(item){
                item.quantity += action.payload.quantity;
            }else{
                state.productData.push(action.payload);
            }
        },
        deleteItem:(state,action) =>{
            state.productData = state.productData.filter((item) =>item._id !== action.payload);
        },
        resetCart: (state) =>{
            state.productData =[];
        },
        incrementQuantity:(state,action) =>{
            const item = state.productData.find((item) => item._id === action.payload._id);
            if(item)
            {
                item.quantity++;
            }
        },
        decrementQuantity:(state,action) =>{
            const item = state.productData.find((item) => item._id === action.payload._id);
            if(item === 1)
            {
                item.quantity = 1;
            }
            else{
                item.quantity--;
            }
        },
        addUser : (state,action) =>{
            state.userInfo = action.payload;
        },
        removeUser: (state,action) =>{
            state.removeUser = null;
        },
    },
});



export const {addtoCart, deleteItem, resetCart, incrementQuantity, decrementQuantity, addUser, removeUser} = BazerSlice.actions;
export default BazerSlice.reducer;