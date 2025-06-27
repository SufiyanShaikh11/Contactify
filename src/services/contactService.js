import axios from 'axios';

const API_URL = 'http://localhost:8080/api/contacts';

const getAll = (search) => {
  return axios.get(API_URL + (search ? `?search=${search}` : ''));
};

const get = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const create = (data) => {
  return axios.post(API_URL, data);
};

const update = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

const deleteContact = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  delete: deleteContact,
};
