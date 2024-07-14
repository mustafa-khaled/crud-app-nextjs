import React from "react";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className={"fixed top-0 left-0 right-0 bottom-0 bg-[#00000080]"}
        onClick={onClose}
      />
      <div
        className={
          "w-[400px] bg-[#fff] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-[20px] mx-auto rounded-md"
        }>
        <span
          className={
            "absolute left-[10px] top-[10px] border cursor-pointer border-[#ccc] w-[20px] flex items-center justify-center"
          }
          onClick={onClose}>
          X
        </span>
        <div className={"mt-[25px]"}>{children}</div>
      </div>
    </>
  );
};

export default Popup;
