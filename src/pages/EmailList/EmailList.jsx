import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import EmailRow from "../../components/EmailRow/EmailRow";
import Section from "../../components/Section/Section";
import response from "./response";
import "./emailList.css";

const EmailList = () => {
  const testDatas = response;
  return (
    <div className="emailList">
      <div className="emailList_header">
        <div className="emailList_header_left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList_header_right">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList_list">
        {testDatas.inbox.map((testData) => (
          <EmailRow
            title={testData.title}
            subject={testData.subject}
            description={testData.description}
            time={testData.time}
            important={testData.important}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
