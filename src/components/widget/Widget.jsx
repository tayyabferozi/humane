import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 36000;
  const diff = 10;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isClients: false,
        link: "See All Users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "clients":
      data = {
        title: "CLIENTS",
        isClients: false,
        link: "Can't See Clients",
        icon: (
          <PeopleAltIcon
            className="icon"
            style={{
              color: "lightblue",
              backgroundColor: "rgba(255, 217, 0, 0.4)",
            }}
          />
        ),
      };
      break;
    case "revenue":
      data = {
        title: "REVENUE",
        isClients: true,
        link: "See All Projects",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgb(179, 204, 179)" }}
          />
        ),
      };
      break;
    case "meetings":
      data = {
        title: "MEETINGS",
        isMeetings: true,
        link: "See All Projects",
        icon: (
          <PhotoCameraFrontIcon
            className="icon"
            style={{
              color: "lightpurple",
              backgroundColor: "rgba(85, 117, 92, 0.5)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isClients && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
