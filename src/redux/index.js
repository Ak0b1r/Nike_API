import { configureStore } from "@reduxjs/toolkit"
import basket from "./basket"
import filter from "./filter"

const store = configureStore({
    reducer:{
        basket,
        filter
    }
})
export default store