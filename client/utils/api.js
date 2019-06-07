import axios from "axios";

export const createUser = (userData) => {
  return axios.post('/api/soccer', userData);
}

export const getAllUsers = () => {
  return axios.get('/api/soccer');
} 

export const updateUser = (userDataId) =>{
  return axios.findById("/api/soccer/:id");
}

export const deleteById = (userDataid) =>{
  return axios.delete("/api/soccer/:id");
}

export const postOffer = (OfferData) => {
  return axios.post("/api/offers");
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