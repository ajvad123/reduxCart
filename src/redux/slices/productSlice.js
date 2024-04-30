import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProductThunk = createAsyncThunk('products/fetchProductThunk', async () => {
    const response = await axios.get("https://dummyjson.com/products")
    console.log(response);
    localStorage.setItem("response", JSON.stringify(response.data.products))
    return response.data.products
})
const productSlice = createSlice({
    name: 'products',
    initialState: {
        product: [],
        productCondainer:[],
        loading: false,
        error: ''
    }
    ,
    reducers:{
        searchProduct:(state,action)=>{
            state.product=state.productCondainer.filter(item=>item.title.toLowerCase().includes(action.payload))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductThunk.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(fetchProductThunk.fulfilled, (state, action) => {
                state.loading = false
                state.product = action.payload
                state.productCondainer=action.payload
            }),
            builder.addCase(fetchProductThunk.rejected, (state, action) => {
                state.loading = false
                state.product = [],
                    state.error = "Request Failed!!"
            })
    }

})

export const {searchProduct}=productSlice.actions

export default productSlice.reducer