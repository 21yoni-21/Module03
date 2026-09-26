import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose, title }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const previousElement = document.activeElement;

    panelRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      previousElement?.focus();
    };
  }, [onClose]);

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        tabIndex="-1"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <h2>{title}</h2>

        <div className="modal-content">
          {children}
        </div>

        <button
          type="button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;