import React, { useState } from "react";

//css
import "../../assets/css/navigation/adminHeader.css";
import { Dropdown, SearchText, Notification } from "../index";
import { BellSimple, FolderSimplePlus } from "phosphor-react";
import { ICON_SIZE_BIG, ICON_SIZE_EXTRA_LARGE } from "../../utils/constraint";

function AminHeader(props) {
  const [isShowNoti, setIsShowNoti] = useState(false);
  const itemDropDown = [
    {
      content: "Nguyen Vu Thanh Nguyen",
    },
    {
      content: "Bùi Thị Đào My",
    },
  ];

  const handleShowNotification = () => {
    setIsShowNoti(true);
  }

  const handleCLoseNotification = () => {
    setIsShowNoti(false)
  }
  return (
    <div className="admin_header flex-center-between">
      <Dropdown
        isShowIcon={true}
        item={itemDropDown}
        isShowSearchField={true}
        isBoxShadow={false}
      />
      <SearchText />
      <button className="adminHeader_button button button_primary font-weight-bold flex-align-center">
        <FolderSimplePlus weight="fill" size={ICON_SIZE_BIG} />
        Lên đơn hàng
      </button>
      <BellSimple onClick={handleShowNotification} className="adminHeader_icon" size={ICON_SIZE_EXTRA_LARGE} />
      {isShowNoti && (
        <div className="notification_container">
          <Notification closeNoti={handleCLoseNotification}/>
        </div>
      )}
    </div>
  );
}

export default AminHeader;
