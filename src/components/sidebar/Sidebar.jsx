import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Link } from "react-router-dom";
//import { Icon } from "@mui/material";

const Sidebar = ({ sideInActive, toggleSidenav }) => {
  return (
    <>
      <div
        className={`overlay ${sideInActive ? "inactive" : ""}`}
        onClick={toggleSidenav}
      ></div>
      <div className={`sidebar ${sideInActive ? "inactive" : ""}`}>
        <div>
          <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">Humane</span>
            </Link>
          </div>
          <hr />
          <div className="center">
            <ul>
              <p className="title">MAIN</p>
              <li>
                <DashboardIcon className="icon" />

                <span>Dashbaord</span>
              </li>
              <p className="title">LIST</p>
              <Link to="/users" style={{ textDecoration: "none" }}>
                <li>
                  <GroupAddIcon className="icon" />
                  <span>Users</span>
                </li>
              </Link>
              <li>
                <PeopleAltIcon className="icon" />
                <span>Clients</span>
              </li>
              <li>
                <FolderOpenIcon className="icon" />
                <span>Projects</span>
              </li>
              <p className="title">SCHEDULING</p>
              <li>
                <PhotoCameraFrontIcon className="icon" />
                <span>Meetings</span>
              </li>
              <p className="title">MONITORING</p>
              <li>
                <NotificationsNoneIcon className="icon" />
                <span>Notifications</span>
              </li>
              <li>
                <AssessmentIcon className="icon" />
                <span>Report</span>
              </li>
              <li>
                <icon>
                  <ReceiptLongIcon className="icon" />
                </icon>
                <span>Logs</span>
              </li>
              <p className="title">MANAGING</p>
              <li>
                <MonetizationOnIcon className="icon" />
                <span>Billing</span>
              </li>
              <li>
                <HomeRepairServiceIcon className="icon" />
                <span>Coaching Tools</span>
              </li>
              <li>
                <SettingsApplicationsIcon className="icon" />
                <span>Settings</span>
              </li>
              <li>
                <SwitchAccountIcon className="icon" />
                <span>Profile</span>
              </li>
              <p className="title">EXITING</p>
              <li>
                <LogoutIcon className="icon" />
                <span>Logout</span>
              </li>
            </ul>
            <div className="bottom">
              <div className="colorOption"></div>
              <div className="colorOption"></div>
              <div className="colorOption"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
