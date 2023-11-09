import axios from "../config/axios";
import {
  URL_GET_CUSTOMER,
  URL_LOGIN_CUSTOMER,
  URL_USER,
} from "../utils/constraint";

export async function getOrderDetails(orderID) {
  try {
    let data = await axios.get(`/api/order/${orderID}`);
    return data;
  } catch (error) {
    return error;
  }
}
export const getOrderListByAction = async (actionCode) => {
  try {
    let data = await axios.get(`/api/order/action/${actionCode}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getActions = async () => {
  try {
    let data = await axios.get(`/api/action`);
    return data;
  } catch (error) {
    return error;
  }
};
export const getCityList = async () => {
  try {
    let data = await axios.get(`/api/order/city`);
    return data;
  } catch (error) {
    return error;
  }
};

export const insertOrder = async (data) => {
  try {
    const checkData = await axios.post("/api/order", data);
    return checkData.status;
  } catch (error) {
    return error;
  }
};
//
// export const deleteOrder = async (id) => {
//   try {
//     let data = await axios.put(`/api/order/${id}`);
//     return data;
//   } catch (error) {
//     return error;
//   }
// };
//
// export const updateOrder = async (obj) => {
//   try {
//     const checkData = await axios.put(URL_USER, obj);
//     return checkData.status;
//   } catch (error) {
//     return error;
//   }
// };