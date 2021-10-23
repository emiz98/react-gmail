import {
  Apps,
  FilterList,
  HelpOutlineOutlined,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png"
          alt="gmail"
        />
      </div>
      <div className="header_middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <IconButton>
          <FilterList className="header_middle_icon" />
        </IconButton>
      </div>
      <div className="header_right">
        <IconButton>
          <HelpOutlineOutlined />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
