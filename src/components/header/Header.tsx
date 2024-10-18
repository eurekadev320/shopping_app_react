import React, { FC } from "react";
import "./Header.scss";
import headerLogo from "../../assets/header-logo.png";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import headerProfile from "../../assets/header-profile.png";

const Header: FC = () => {
  return (
    <div className="header">
      <img src={headerLogo} className="header-logo"></img>
      <Input
        size="large"
        suffix={<SearchOutlined />}
        placeholder={"Search Jupiter"}
        className={"header-search"}
      />
      <div className="space"></div>
      <div className="off-btn">Get $20 Off</div>
      <div className="menu-button">
        <div className="menu-icon">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5C11 3.9391 10.579 2.9217 9.828 2.1716C9.078 1.4214 8.061 1 7 1H1V16H8C8.796 16 9.55897 16.3161 10.121 16.8787C10.684 17.4413 11 18.2044 11 19M11 5V19M11 5C11 3.9391 11.421 2.9217 12.172 2.1716C12.922 1.4214 13.939 1 15 1H21V16H14C13.204 16 12.441 16.3161 11.879 16.8787C11.316 17.4413 11 18.2044 11 19"
              stroke="#777777"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="menu-text">Recipes</div>
      </div>
      <div className="menu-button active">
        <div className="menu-icon">
          <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.50002 1.95831V0.958313C2.04802 0.958313 1.653 1.26101 1.535 1.69701L2.50002 1.95831ZM20.5 1.95831L21.465 1.69701C21.347 1.26101 20.952 0.958313 20.5 0.958313V1.95831ZM17 7.50001L17.555 6.66791C17.192 6.42641 16.715 6.44711 16.375 6.71911L17 7.50001ZM11.5 7.50001L12.055 6.66791C11.692 6.42641 11.215 6.44711 10.875 6.71911L11.5 7.50001ZM6.00002 7.50001L6.55502 6.66791C6.15802 6.40351 5.63005 6.45581 5.29305 6.79291L6.00002 7.50001ZM2.50002 2.95831H20.5V0.958313H2.50002V2.95831ZM19.535 2.21951L20.798 6.88721L22.729 6.36471L21.465 1.69701L19.535 2.21951ZM18.955 7.60131L17.555 6.66791L16.445 8.33211L17.845 9.26541L18.955 7.60131ZM16.375 6.71911L15.588 7.34881L16.838 8.91051L17.625 8.28091L16.375 6.71911ZM13.229 7.45111L12.055 6.66791L10.945 8.33211L12.12 9.11521L13.229 7.45111ZM10.875 6.71911L10.088 7.34881L11.338 8.91051L12.125 8.28091L10.875 6.71911ZM7.72903 7.45111L6.55502 6.66791L5.44503 8.33211L6.62002 9.11521L7.72903 7.45111ZM5.29305 6.79291L4.90102 7.18431L6.316 8.59851L6.70699 8.20711L5.29305 6.79291ZM2.31301 6.47681L3.46505 2.21951L1.535 1.69701L0.382042 5.95431L2.31301 6.47681ZM2.66201 7.40611C2.35801 7.20351 2.21801 6.82941 2.31301 6.47681L0.382042 5.95431C0.0620423 7.13641 0.533025 8.39081 1.55203 9.07021L2.66201 7.40611ZM4.90102 7.18431C4.30302 7.78261 3.36601 7.87541 2.66201 7.40611L1.55203 9.07021C3.05003 10.0683 5.043 9.87091 6.316 8.59851L4.90102 7.18431ZM15.588 7.34881C14.908 7.89281 13.954 7.93421 13.229 7.45111L12.12 9.11521C13.569 10.0815 15.477 9.99871 16.838 8.91051L15.588 7.34881ZM20.653 7.43321C20.199 7.88671 19.488 7.95711 18.955 7.60131L17.845 9.26541C19.172 10.15 20.939 9.97511 22.067 8.84741L20.653 7.43321ZM10.088 7.34881C9.40804 7.89281 8.45403 7.93421 7.72903 7.45111L6.62002 9.11521C8.06902 10.0815 9.97704 9.99871 11.338 8.91051L10.088 7.34881ZM20.798 6.88721C20.851 7.08211 20.795 7.29041 20.653 7.43321L22.067 8.84741C22.716 8.19811 22.969 7.25111 22.729 6.36471L20.798 6.88721Z"
              fill="#333333"
            />
            <path
              d="M20.5 19.9583V20.9583C21.052 20.9583 21.5 20.5105 21.5 19.9583H20.5ZM2.5 19.9583H1.5C1.5 20.5105 1.948 20.9583 2.5 20.9583V19.9583ZM19.5 8.45831V19.9583H21.5V8.45831H19.5ZM20.5 18.9583H2.5V20.9583H20.5V18.9583ZM3.5 19.9583V8.45831H1.5V19.9583H3.5Z"
              fill="#333333"
            />
            <path
              d="M9 11.9583V10.9583C8.448 10.9583 8 11.406 8 11.9583H9ZM14 11.9583H15C15 11.406 14.552 10.9583 14 10.9583V11.9583ZM10 19.9583V11.9583H8V19.9583H10ZM9 12.9583H14V10.9583H9V12.9583ZM13 11.9583V19.9583H15V11.9583H13Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className="menu-text">Profile</div>
      </div>
      <div className="menu-button">
        <div className="menu-icon">
          <img src={headerProfile} className="profile-img"></img>
        </div>
        <div className="menu-text">Profile</div>
      </div>
      <div className="menu-button">
        <div className="menu-icon">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 19V12M4 8V1M12 19V10M12 6V1M20 19V14M20 10V1M1 12H7M9 6H15M17 14H23"
              stroke="#777777"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="menu-text">Settings</div>
      </div>
    </div>
  );
};

export default Header;
