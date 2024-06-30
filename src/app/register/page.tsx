'use client';
import React, { useState } from "react";
import { Modal } from "@/components/Modal";
import Login from "@/components/Login";

const Register: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal show={showModal}>
        <Login />
      </Modal>
    </div>
  );
};

export default Register;
