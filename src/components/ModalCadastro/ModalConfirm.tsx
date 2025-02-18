import React from "react";
import "./ModalConfirm.css";

interface ModalConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default ModalConfirm;
