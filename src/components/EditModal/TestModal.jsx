import React from "react";
import { Modal } from "@mui/material";

const TestModal = ({ open, handleClose, data }) => {
  console.log(data);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <span>Test</span>
      </Modal>
    </div>
  );
};

export default TestModal;
