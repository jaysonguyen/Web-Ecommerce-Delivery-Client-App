import axios from "../config/axios";
import {
  URL_GET_CUSTOMER,
  URL_GET_SHIPPER_BY_BRANCH,
  URL_LOGIN_CUSTOMER,
  URL_USER,
} from "../utils/constraint";

export async function getUserList() {
  try {
    let data = await axios.get("/api/user");
    return data;
  } catch (error) {
    return error;
  }
}

export async function getCustomerList() {
  try {
    let data = await axios.get(URL_GET_CUSTOMER);
    return data;
  } catch (error) {
    return error;
  }
}
export const getUserByCode = async (code) => {
  try {
    let data = await axios.get(`/api/user/${code}`);
    return data;
  } catch (error) {
    return error;
  }
};
export const getStoreByUser = async (userId) => {
  try {
    let data = await axios.get(`/api/user/${userId}/store`);
    return data;
  } catch (error) {
    return error;
  }
};

export const insertUser = async (data) => {
  try {
    const checkData = await axios.post(URL_USER, data);
    return checkData.status;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (id) => {
  try {
    let data = await axios.put(`/api/user/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const updateUSer = async (obj) => {
  try {
    const checkData = await axios.put(URL_USER, obj);
    return checkData.status;
  } catch (error) {
    return error;
  }
};

export const loginCustomer = async (data) => {
  try {
    const checkData = await axios.post(URL_LOGIN_CUSTOMER, data);
    return checkData;
  } catch (error) {
    return error;
  }
};

export const getShipperInBranchByBranchId = async (data) => {
  try {
    const shipperList = await axios.get(URL_GET_SHIPPER_BY_BRANCH + `/${data}`);
  } catch (error) {
    console.log(error);
  }
};
