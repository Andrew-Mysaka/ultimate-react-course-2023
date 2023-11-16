import {configureStore} from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

configureStore({
    reducer:{
        account: accountReducer,
        customer: customerReducer
    },
});

export default store;