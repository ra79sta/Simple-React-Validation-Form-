import React from "react";
import { PropTypes } from "prop-types";

const Message = (props) => {
  const { message } = props;
  return (
    <div>
      <h3 className="text-center message">{message}</h3>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.string,
};
