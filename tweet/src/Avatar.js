import React from "react";

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return <img alt="avatar" className="avatar" src={url} />;
}

export default Avatar;
