import axios from "../config/axios";

export async function getBranchList() {
  try {
    const data = await axios.get("/api/branch");
    return data.data;
  } catch (error) {
    return error;
  }
}

export const createBranch = async ({ name, address, des }) => {
  try {
    const data = await axios.post("/api/branch", {
      name,
      address,
      des,
    });
    return data.status;
  } catch (error) {
    return error;
  }
};

export const updateBranch = async (branchInfo) => {
  try {
    const data = await axios.put("/api/branch", branchInfo);
    return data.status;
  } catch (error) {
    return error;
  }
};

export const getUserByBranchCode = async (branchCode) => {
  try {
    const data = await axios.get(`/api/user/branch/${branchCode}`);
    return data.data;
  } catch (error) {
    return error;
  }
};

export const deleteBranch = async (id) => {
  try {
    let data = await axios.put(`/api/branch/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};