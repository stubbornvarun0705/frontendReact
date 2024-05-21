import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const RegisterModal = ({ show, handleClose, submitForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    submitForm(event, 'signup', email, password);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="registerEmail">Email:</label>
            <input
              type="email"
              className="form-control"
              id="registerEmail"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registerPassword">Password:</label>
            <input
              type="password"
              className="form-control"
              id="registerPassword"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-outline-primary mt-3">Sign Up</button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
