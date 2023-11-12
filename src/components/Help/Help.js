import React from "react";

import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import "./Modal.css";

function Help({ handleDismiss, children, isModalOpen }) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        handleDismiss();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);

  const wrapperClasses = isModalOpen ? "wrapper active" : "wrapper";

  return (
    <FocusLock>
      <RemoveScroll>
        <div className={wrapperClasses}>
          <div className="overlay" onClick={handleDismiss} />
          <div className="dialog">
            <button className="closeBtn" onClick={handleDismiss}>
              <Close />
            </button>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Help;
