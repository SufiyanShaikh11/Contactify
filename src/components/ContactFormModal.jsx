import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import contactService from '../services/contactService';

const ContactFormModal = ({ show, onHide, onSave, contact }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', position: '', active: true });

  useEffect(() => {
    if (contact) setForm(contact);
    else setForm({ name: '', phone: '', email: '', position: '', active: true });
  }, [contact]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async () => {
    contact
      ? await contactService.update(contact.id, form)
      : await contactService.create(form);
    onHide();
    onSave();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{contact ? 'Edit Contact' : 'Add New Contact'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Control
            placeholder="Position"
            name="position"
            value={form.position}
            onChange={handleChange}
            className="mb-2"
          />
          <Form.Check
            label="Active"
            name="active"
            checked={form.active}
            onChange={handleChange}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button onClick={handleSubmit}>{contact ? 'Update' : 'Add'}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactFormModal;
