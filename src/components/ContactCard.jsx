import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const ContactCard = ({ contact, onEdit, onDelete }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{contact.position}</Card.Subtitle>
        <Card.Text>
          📞 {contact.phone}<br />
          ✉️ {contact.email}<br />
          {contact.active ? <Badge bg="success">Active</Badge> : <Badge bg="secondary">Inactive</Badge>}
        </Card.Text>
        <Button size="sm" variant="info" className="me-2" onClick={() => onEdit(contact)}>Edit</Button>
        <Button size="sm" variant="danger" onClick={() => onDelete(contact.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
