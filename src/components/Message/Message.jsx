import PropTypes from "prop-types";
import React from "react";

function Message(props) {
  const { render = () => {} } = props;

  return (
    <p>
      {props.author}: {props.text}
      <br />
      {render({ className: "message__postscriptum" })}
    </p>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
Message.defaultProps = {};

export default Message;
