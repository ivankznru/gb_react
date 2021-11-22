import React from "react";

function Message(props) {
  const { nick = "1234id" } = props;

  return (
    <p id={nick}>
      {props.author}: {props.text}
    </p>
  );
}

Message.defaultProps = {};

export default Message;
