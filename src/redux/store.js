import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users";
import form from "./slices/form";


const store = configureStore({
  reducer: { 
   users,
   form
  }
})

export default store