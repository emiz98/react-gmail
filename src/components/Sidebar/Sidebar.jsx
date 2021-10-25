import {
  AccessTime,
  Add,
  Chat,
  Delete,
  Duo,
  Error,
  ExpandLess,
  ExpandMore,
  Inbox,
  Label,
  LabelImportant,
  Mail,
  Note,
  Person,
  Phone,
  ScheduleSend,
  Send,
  Settings,
  Star,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import SidebarOption from "../SidebarOption/SidebarOption";
import $ from "jquery";
import "./sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [toggleMore, setToggleMore] = useState(false);

  const openMail = () => {
    $(".sendMail").css("display", "flex");
  };
  const toggleMoreFunc = () => {
    setToggleMore(!toggleMore);
    if (toggleMore) {
      $(".sidebar_scroller").css("overflow-y", "hidden");
    } else {
      $(".sidebar_scroller").css("overflow-y", "scroll");
    }
  };

  const MouseEnter = () => {
    setTimeout(() => {
      setToggleNavbar(true);
      $(".sidebar").css("flex", "0.2");
    }, 600);
  };
  const MouseLeave = () => {
    setToggleNavbar(false);
    $(".sidebar").css("flex", "0");
    if (toggleMore) {
      toggleMoreFunc();
    }
  };

  return (
    <div
      className="sidebar"
      onMouseEnter={MouseEnter}
      onMouseLeave={MouseLeave}
    >
      {/* <Button
        onClick={openMail}
        className="sidebar_compose"
        startIcon={<Add fontSize="large" />}
      >
        Compose
      </Button> */}
      <div className="addButton" onClick={openMail}>
        <IconButton>
          <Add fontSize="large" />
        </IconButton>
        {toggleNavbar && <span>Compose</span>}
      </div>

      <div className="sidebar_scroller">
        <SidebarOption
          Icon={Inbox}
          title={toggleNavbar && "Inbox"}
          number={54}
          selected={true}
        />
        <SidebarOption
          Icon={Star}
          title={toggleNavbar && "Starred"}
          number={54}
        />
        <SidebarOption
          Icon={AccessTime}
          title={toggleNavbar && "Snoozed"}
          number={54}
        />
        <SidebarOption Icon={Send} title={toggleNavbar && "Sent"} number={54} />
        <SidebarOption
          Icon={Note}
          title={toggleNavbar && "Drafts"}
          number={54}
        />
        <div onClick={toggleMoreFunc}>
          <SidebarOption
            Icon={toggleMore ? ExpandLess : ExpandMore}
            title={toggleMore ? toggleNavbar && "Less" : toggleNavbar && "More"}
            number={54}
          />
        </div>

        {toggleMore && (
          <>
            <SidebarOption
              Icon={LabelImportant}
              title={toggleNavbar && "Important"}
              number={54}
            />
            <SidebarOption
              Icon={Chat}
              title={toggleNavbar && "Chats"}
              number={54}
            />
            <SidebarOption
              Icon={ScheduleSend}
              title={toggleNavbar && "Scheduled"}
              number={54}
            />
            <SidebarOption
              Icon={Mail}
              title={toggleNavbar && "All Mail"}
              number={54}
            />
            <SidebarOption
              Icon={Error}
              title={toggleNavbar && "Spam"}
              number={54}
            />
            <SidebarOption
              Icon={Delete}
              title={toggleNavbar && "Bin"}
              number={54}
            />
            <SidebarOption
              Icon={Label}
              title={toggleNavbar && "Categories"}
              number={54}
            />
            <SidebarOption
              Icon={Settings}
              title={toggleNavbar && "Manage labels"}
              number={54}
            />
            <SidebarOption
              Icon={Add}
              title={toggleNavbar && "Create new label"}
              number={54}
            />
          </>
        )}
      </div>

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
