import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/Pages/customer.css";
import {
  DotsThreeVertical,
  X,
  PencilSimple,
  Phone,
  Warning,
  CaretLeft,
} from "phosphor-react";
import { ICON_SIZE_EXTRA_LARGE } from "../../../utils/constraint";
import ActionCustomer from "./ActionCustomer";
import { Input, Dropdown } from "../../index";
import { getUserById, getUserList } from "../../../services/UserService";
import { User } from "../../../model/user";
import toast from "react-hot-toast";
import { TabContent } from "./TabContent";

function DetailCustomer({ closeDetail, userSelected }) {
  const [currentTab, setCurrentTab] = useState("1");
  const [isShowAction, setIsShowAction] = useState(false);
  const [detailData, setDetailData] = useState(User);

  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [des, setDes] = useState("");

  const handleShowAction = () => {
    const flag = !isShowAction;
    setIsShowAction(flag);
  };

  // const handleCloseAction = () => {
  //   setIsShowAction(false);
  // };
  const tabs = [
    {
      id: 1,
      tabTitle: "Client details",
      title: "Client details",
    },
    {
      id: 2,
      tabTitle: "Orders list",
      title: "Orders list",
    },
    {
      id: 3,
      tabTitle: "Bank account",
      title: "Bank account",
    },
    {
      id: 4,
      tabTitle: "Store",
      title: "Invoices",
    },
  ];

  const actions = [
    {
      action: "Edit details",
    },
    {
      action: "Block client",
    },
    {
      action: "Delete client",
    },
  ];
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  const handleClearInput = () => {
    setNameUser("");
    setEmail("");
    setPhoneNum("");
    setDes("");
    closeDetail();
  };
  return (
    <>
      <div className="go_back_button_container" onClick={closeDetail}>
        <Link>
          <button onClick={handleClearInput} className="close_detail_icon">
            <CaretLeft size={ICON_SIZE_EXTRA_LARGE} />
          </button>
        </Link>
      </div>
      <div className="detail_customer_container">
        <div className="count_quantity_type_order_cus">
          <div className="quantity_info">
            <h4>0đ</h4>
            <p>Total sales</p>
          </div>
          <div className="quantity_info">
            <h4>2</h4>
            <p>Completed</p>
          </div>
          <div className="quantity_info">
            <h4>1</h4>
            <p>Cancelled</p>
          </div>
          <div className="quantity_info">
            <h4>0</h4>
            <p>No-show</p>
          </div>
        </div>
        <div className="info_cus">
          <div className="name_cus_frame">
            <div className="image_cus">
              <span>D</span>
            </div>
            <div className="name_email_cus">
              <h3>{userSelected.fullName}</h3>
              <div className="email_phone_frame">
                <a href="#">{userSelected.email}</a>
                <div className="phone_number_cus">
                  <Phone size={13} className="phone_number_icon" />
                  <div className="over_lay">
                    <a href="#" className="phone_number_data">
                      <Phone size={16} className="icon_mini_phone" />
                      {userSelected.phone == null
                        ? "Chưa cập nhật"
                        : userSelected.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="status_customer_blaclist_frame">
            <div className="type_cus">{detailData.purpose}</div>
            <div className="blacklist_frame ">
              <Warning size={20} />
            </div>
          </div>

          <div className="action_cus_frame">
            <button className="dotthree_icon" onClick={handleShowAction}>
              <DotsThreeVertical size={32} />
            </button>
            <div>
              <button className="btn_Order"> Order</button>
            </div>
          </div>
          {isShowAction && (
            <ActionCustomer item={actions} icon={<PencilSimple size={17} />} />
          )}

          <div className="container">
            <div className="tabs">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  id={tab.id}
                  disabled={currentTab === `${tab.id}`}
                  onClick={handleTabClick}
                >
                  {tab.tabTitle}
                </button>
              ))}
            </div>
            <div className="content">
              {tabs.map((tab, index) => (
                <div key={index}>
                  {currentTab === tab.id.toString() && (
                    <TabContent
                      nameUser={nameUser}
                      setNameUser={setNameUser}
                      des={des}
                      setDes={setDes}
                      phoneNum={phoneNum}
                      setPhoneNum={setPhoneNum}
                      email={email}
                      setEmail={setEmail}
                      tab={tab.id.toString()}
                      userID={userSelected.id}
                      clearData={handleClearInput}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCustomer;
