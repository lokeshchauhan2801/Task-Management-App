import { useEffect, useRef } from "react";

const ModalWrapper = ({ children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper">
        <div ref={modalRef}>
          <div className="modal-container">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ModalWrapper;
