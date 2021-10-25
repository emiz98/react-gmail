import {
  AddToDrive,
  ArrowDropDown,
  AttachFile,
  Close,
  Create,
  Delete,
  EmojiEmotionsOutlined,
  FormatColorText,
  Image,
  InsertLink,
  LockClock,
  Maximize,
  Minimize,
  MoreVert,
  OpenInFull,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import $ from "jquery";
import "./sendMail.css";

const SendMail = () => {
  const [minimzed, setMinimzed] = useState(false);

  const closeMail = () => {
    $(".sendMail").css("display", "none");
  };

  const toggleMinimize = () => {
    setMinimzed(!minimzed);
    if (minimzed) {
      $(".sendMail").css("height", "65%");
      $(".sendMail").css("width", "70%");
    } else {
      $(".sendMail").css("height", "auto");
      $(".sendMail").css("width", "280px");
    }
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header" onClick={toggleMinimize}>
        <h3>New Message</h3>
        <div>
          {!minimzed ? (
            <Minimize onClick={toggleMinimize} />
          ) : (
            <Maximize onClick={toggleMinimize} />
          )}
          <OpenInFull />
          <Close onClick={closeMail} />
        </div>
      </div>
      {!minimzed && (
        <form>
          <input type="text" placeholder="Recipients" />
          <input type="text" placeholder="Subject" />
          <textarea className="sendMail_message" cols="30" rows="10"></textarea>

          <div className="sendMailOptions">
            <Button className="sendMail_send">
              Send <ArrowDropDown />
            </Button>
            <div className="sendMailOptions_left">
              <FormatColorText />
              <AttachFile />
              <InsertLink />
              <EmojiEmotionsOutlined />
              <AddToDrive />
              <Image />
              <LockClock />
              <Create />
            </div>
            <div className="sendMailOptions_right">
              <MoreVert />
              <Delete />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default SendMail;
