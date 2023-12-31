import axios from "../config/axios";

export async function getCityList() {
  try {
    let data = await axios.get("/api/city");
    return data;
  } catch (error) {
    return error;
  }
}
export const getCityById = async (id) => {
  try {
    let data = await axios.get(`/api/city/${id}`);
    console.log("get city details: " + data);
    return data;
  } catch (error) {
    return error;
  }
};
export const insertCity = async (data) => {
  try {
    const checkData = await axios.post("/api/city", data);
    return checkData.status;
  } catch (error) {
    return error;
  }
};
export const insertArea = async (data) => {
  try {
    const checkData = await axios.post("/api/area", data);
    return checkData.status;
  } catch (error) {
    return error;
  }
};

export const deleteCity = async (id) => {
  try {
    let data = await axios.put(`/api/city/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const updateCity = async (obj) => {
  try {
    const checkData = await axios.put("/api/city", obj);
    return checkData.status;
  } catch (error) {
    return error;
  }
};
