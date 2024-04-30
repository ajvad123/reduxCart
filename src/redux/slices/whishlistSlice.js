import { createSlice } from "@reduxjs/toolkit";


const  wishSlice= createSlice({

    name:'wishlist',
    initialState:{
        wishlist:[]

    }
,

  reducers:{

        addToWishlist:(state,action)=>{
          const existingProduct=state.wishlist.find(item=>item.id==action.payload.id)
          if (existingProduct) {
            alert("Product Already Exist in WhishList")
            
          }else{
            state.wishlist.push(action.payload)
            alert("Successfully Added To wishlist")
          }
        },
        removeFromWishlist:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
        }
  }


}
)

export const {addToWishlist,removeFromWishlist}=wishSlice.actions
export default wishSlice.reducer