import React from "react";
import "./Li.css";
import { FaCheck, FaCopy, FaEllipsis } from "react-icons/fa6";

const Li = ({ icon, text, url, target }) => {

  const [modalLink, setModalLink] = React.useState(false)
  const linkCopy = url

  function handleClick() {
    setModalLink(!modalLink)
  }

  function copyLink() {
    navigator.clipboard.writeText(linkCopy);
  }

  return (
    <>

      <li id="li">
        <a href={url} target={target} rel="noopener noreferrer">
          {icon}
          {text}
        </a>
        <FaEllipsis onClick={handleClick} />
        {modalLink && (
          <div className="modal-link">
            <li onClick={copyLink}>Copy Link <FaCopy /></li>
          </div>
        )}
      </li>

    </>
  );
};

export default Li;
