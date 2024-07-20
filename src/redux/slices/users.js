import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addFunds, createAccountByCustomerId, createCustomer, deleteCustomer, deleteCustomerAccount, getCustomers, updateCustomer, withdrawFunds } from "../../api/request"
import { Notify } from "notiflix"

const initialState = {
  list: []
}

export const getUsers = createAsyncThunk("users/get-list", async () => {
  const { data } = await getCustomers()
  return data
})

export const sendForm = createAsyncThunk("users/send-form", async ( type, candidate ) => {
  
  /*let data = null
  switch (type) {
    case "create_customer": data = await createCustomer({ ...candidate }); break;
    case "update_customer": data = await updateCustomer({ ...candidate }); break;
    case "delete_customer": data = await deleteCustomer({ ...candidate }); break;
    case "create_account_customer": data = await createAccountByCustomerId({ ...candidate }); break;
    case "delete_account_customer": data = await deleteCustomerAccount({ ...candidate }); break;
    case "add_funds": data = await addFunds({ ...candidate }); break;
    case "withdraw_funds": data = await withdrawFunds({ ...candidate }); break;
    case "send_funds": data = await sendForm({ ...candidate }); break;
    default: data = null
  }
  return data */
  return {}
})

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.list = [...payload]
    })
    builder.addCase(sendForm.fulfilled, () => {
      Notify.success("Form Sending")
    })
    builder.addCase(sendForm.rejected, ({ payload }) => {
      Notify.failure(payload.message)
    })
  }
})

export default usersSlice.reducer