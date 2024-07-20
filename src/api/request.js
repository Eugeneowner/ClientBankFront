import {instance} from "./config"

const customers = '/customers';
const accounts = '/accounts';

export const getCustomers = async () => {
    const { data } = await instance.get(customers);
    return data;
};

export const createCustomer = async ({name, email, age}) => {
    const response = await instance.post(customers + "/create", {}, {
        params: {
            name: name,
            email: email,
            age: age
        }
    });
    return response.data;
};

export const updateCustomer = async ({id, customer}) => {
    const response = await instance.put(customers + `/update/${id}`, customer);
    return response.data;
};

export const deleteCustomer = async (id) => {
    const response = await instance.delete(customers + `/delete/${id}`);
    return response.data;
};

export const createAccountByCustomerId = async (customer) => {
    const response = await instance.post(customers + `/create_account_by_id`, customer);
    return response.data;
};

export const deleteCustomerAccount = async (customerId, accountNumber) => {
    const response = await instance.delete(customers + `/delete_account_by_id?id=${customerId}&accountNumber=${accountNumber}`);
    return response.data;
};

export const deleteAllCustomerAccounts = async (customerId) => {
    const response = await instance.delete(customers + `/delete_accounts_by_id?id=${customerId}`);
    return response.data;
};

export const addFunds = async (addFundsModel) => {
    const response = await instance.post(accounts + '/add_funds', addFundsModel);
    return response.data;
};

export const withdrawFunds = async (addFundsModel) => {
    const response = await instance.post(accounts + '/withdraw_funds', addFundsModel);
    return response.data;
};

export const sendFunds = async (addFundsModel) => {
    const response = await instance.post(accounts + '/send_funds', addFundsModel);
    return response.data;
};
