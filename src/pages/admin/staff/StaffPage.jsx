import React, { useEffect, useState } from "react";
import { MyTable } from "../../../components/template/table/MyTable/MyTable";
import { Plus, CaretLeft } from "phosphor-react";
import { AddStaff, MyButton } from "../../../components";
import { ICON_SIZE_BIG } from "../../../utils/constraint";
import { getStaffList, getShipperList } from "../../../services/StaffService";
import { useDispatch, useSelector } from "react-redux";
import consumerSlice from "../../../features/consumer/consumerSlice";
import "../../../assets/css/Pages/staff.css";
import { deleteUser } from "../../../services/UserService";
import toast from "react-hot-toast";
import tableSlice from "../../../features/table/tableSlice";
import { tableSelector } from "../../../selectors/consumerSelector";
import { useNavigate } from "react-router-dom";

export const StaffPage = () => {
  const navigate = useNavigate();

  const [staffs, setStaffs] = useState([]);
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [data, setData] = useState({});
  const [buttonType, setButtonType] = useState("Add");

  const tableData = useSelector(tableSelector);
  const dispatch = useDispatch();

  const fetchStaff = async () => {
    try {
      const data = await getStaffList();
      if (data) {
        setStaffs(data.data);
        dispatch(consumerSlice.actions.setStaffList([data.data]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchShipper = async () => {
    try {
      const data = await getShipperList();
      if (data) {
        setStaffs(data.data);
        dispatch(consumerSlice.actions.setShipperList([data.data]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    let list = [...tableData.selectList];
    if (list.length === 0) {
      toast.error("Choose item to delete");
      return;
    }

    for (let i = 0; i < list.length; i++) {
      let res = await deleteUser(list[i].id);
      if (!res) {
        toast.error("Something went wrong");
        return;
      }
    }
    toast.success("Deleted successfully");
    dispatch(tableSlice.actions.handleSelected([]));
    fetchStaff();
  };

  const handleAddButton = () => {
    setIsShowAdd(true);
    setButtonType("Add");
  };

  const handleButtonAction = async (data, type) => {
    switch (type) {
      case "details": {
        setIsShowAdd(true);
        setData(data);
        setButtonType("Save");
        break;
      }
      case "delete": {
        console.log(type);
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    fetchStaff();

    return () => {
      console.log("Not thing");
    };
  }, []);

  return (
    <div className="">
      {!isShowAdd && (
        <>
          <div className="pd-bt-10 staff_page_header flex-center-between">
            <div className="d-flex gap-5">
              <h3>Staff management</h3>
              <div className="tab_container">
                <MyButton
                  text="Staff"
                  height="44px"
                  width="auto"
                  hoverColor="var(--text-white)"
                  bgColor="var(--primary-color)"
                  fontColor="var(--text-white)"
                  borderRadius="5px"
                  padding="5px 20px"
                  margin="0 10px 0 0"
                  borderColor="var(--primary-color)"
                  callback={fetchStaff}
                />
                <MyButton
                  text="Shipper"
                  height="44px"
                  width="auto"
                  hoverColor="var(--text-white)"
                  bgColor="var(--primary-color)"
                  fontColor="var(--text-white)"
                  borderRadius="5px"
                  padding="5px 20px"
                  borderColor="var(--primary-color)"
                  callback={fetchShipper}
                />
              </div>
            </div>
            <button onClick={handleAddButton} className="btnAdd">
              <Plus size={ICON_SIZE_BIG} />
              Add
            </button>
          </div>
          <div className="staff_page_content">
            <MyTable
              callback={handleButtonAction}
              list={staffs && staffs}
              showCheckBox={true}
              deleteCallback={handleDelete}
            />
          </div>
        </>
      )}
      {isShowAdd && (
        <div className="add_employee_container">
          <div className="go_back_button_container">
            <CaretLeft
              onClick={() => setIsShowAdd(false)}
              size={ICON_SIZE_BIG}
            />
          </div>
          <h3>{buttonType === "Add" ? "Add staff" : "Staff Detals"}</h3>
          <AddStaff
            isOpen={isShowAdd}
            fetchShipper={fetchShipper}
            fetchStaff={fetchStaff}
            data={data}
            buttonType={buttonType}
            setButtonType={setButtonType}
          />
        </div>
      )}
    </div>
  );
};
