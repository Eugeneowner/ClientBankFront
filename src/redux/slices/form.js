import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  create_customer: {
    title: "Create customer",
    list: [
      "name",
      "email",
      "age"
    ],
  },
  update_customer: {
    title: "Update customer",
    list: [
      "name",
      "email",
      "age"
    ]
  },
  delete_customer: {
    title: "Delete customer",
    list: [
      "id"
    ]
  },
  create_account_customer: {
    title: "Create account customer",
    list: [
      "customer_id",
      "currency"
    ]
  },
  delete_account_customer: {
    title: "Delete account customer",
    list: [
      "client_id",
      "account_number"
    ]
  },
  add_funds: {
    title: "Add funds",
    list: [
      "card_number",
      "sum"
    ]
  },
  withdraw_funds: {
    title: "Withdraw funds",
    list: [
      "card_number",
      "sum"
    ]
  },
  send_funds: {
    title: "send_funds",
    list: [
      "card_number_from",
      "card_number_to",
      "sum"
    ]
  }

}


const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {

  }
})

export default formSlice.reducer