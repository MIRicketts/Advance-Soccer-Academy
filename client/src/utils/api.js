import axios from "axios";

export const createUser = (userData) => {
  return axios.post('/api/soccer', userData);
}

export const getAllUsers = () => {
  return axios.get('/api/soccer');
} 

export const updateUser = (userDataId, userData) =>{
  return axios.put(`/api/soccer/${userDataId}`, userData);
}

export const deleteById = (userDataId) =>{
  return axios.delete(`/api/soccer/${userDataId}`);
}

export const postOffer = (OfferData) => {
  return axios.post("/api/offer", OfferData);
}

export const getAllOffers = () => {
  return axios.get("/api/offer");
}

export const login = (signUp) => {
  return axios.post("/api/signUp");
}

export default {
  createUser,
  getAllUsers,
  updateUser,
  deleteById,
  postOffer,
  getAllOffers,
  login
}