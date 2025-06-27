import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ContactCard from '../components/ContactCard';
import ContactFormModal from '../components/ContactFormModal';
import Pagination from '../components/Pagination';
import contactService from '../services/contactService';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const contactsPerPage = 12;

  useEffect(() => {
    fetchContacts();
  }, [search]);

  const fetchContacts = async () => {
    const res = await contactService.getAll(search);
    setContacts(res.data);
  };

  const onEdit = (contact) => {
    setEditingContact(contact);
    setModalShow(true);
  };

  const onDelete = async (id) => {
    if (confirm('Are you sure to delete this contact?')) {
      await contactService.delete(id);
      fetchContacts();
    }
  };

  const paginatedContacts = contacts.slice(
    (page - 1) * contactsPerPage,
    page * contactsPerPage
  );

  return (
    <Container style={{ marginTop: '80px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>All Contacts</h4>
        <Button onClick={() => { setEditingContact(null); setModalShow(true); }}>
          + Add New Contact
        </Button>
      </div>

      <Form.Control
        placeholder="Search by name, phone, or email"
        className="mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row>
        {paginatedContacts.map((contact) => (
          <Col md={3} key={contact.id} className="mb-4">
            <ContactCard contact={contact} onEdit={onEdit} onDelete={onDelete} />
          </Col>
        ))}
      </Row>

      <Pagination
        total={contacts.length}
        perPage={contactsPerPage}
        currentPage={page}
        setPage={setPage}
      />

      <ContactFormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSave={fetchContacts}
        contact={editingContact}
      />
    </Container>
  );
};

export default Home;
