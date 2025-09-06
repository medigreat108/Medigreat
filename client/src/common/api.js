import axios from "axios";

const BASE_URL = "/api/products";
const AUTH_BASE_URL = "/api/auth";
const CONTACT_BASE_URL = "/api/contact";

export const getProducts = () => axios.get(`${BASE_URL}/`);

export const getProductById = (id) => axios.get(`${BASE_URL}/${id}`);

export const createProduct = (data, token) =>
  axios.post(`${BASE_URL}/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updatedProduct = (id, product, token) =>
  axios.put(`${BASE_URL}/${id}`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteProduct = (id, token) =>
  axios.delete(`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const bulkInsertProducts = (products) =>
  axios.post(`${BASE_URL}`, products);

export const getSignUpApi = (userData) =>
  axios.post(`${AUTH_BASE_URL}/signup`, userData);

export const getLoginApi = (credentials) =>
  axios.post(`${AUTH_BASE_URL}/login`, credentials);

export const getAdminApi = (userData) =>
  axios.post(`${AUTH_BASE_URL}/admin`, userData);

export const sendContactEmail = (userData) =>
  axios.post(`${CONTACT_BASE_URL}/`, userData);
