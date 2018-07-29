import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

const API_URL = 'http://localhost:3000';

export function getProducts() {
  const request = axios.get(`${API_URL}/products`);

  return {
    type: GET_PRODUCTS,
    payload: request
  };
}

export function addProduct(values, callback) {
  const request = axios.post(`${API_URL}/products`, values)
    .then(() => callback());

  return {
    type: ADD_PRODUCT,
    payload: request
  };
}

export function editProduct(values, callback) {
  const request = axios.put(`${API_URL}/products`, values)
    .then(() => callback());

  return {
    type: EDIT_PRODUCT,
    payload: request
  };
}