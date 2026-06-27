import {configureStore} from "@reduxjs/toolkit";
import ReduxFrontReducer from "./reduxFront/ReduxFrontSlice.jsx";
import ReduxBackReducer  from "./reduxBack/ReduxBackSlice.jsx";
const store = configureStore({
    reducer: {
        ReduxFrontReducer,
        ReduxBackReducer,
    }
})

export default store;