import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
      </div>
      <div className="header_middle"></div>
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
