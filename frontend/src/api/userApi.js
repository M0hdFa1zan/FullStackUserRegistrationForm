import axios from 'axios';

const API_URL = 'https://userregistrationform-9rrr.onrender.com/users';

export const fetchUsers = async () => await axios.get(API_URL).then(res => res.data);
export const addUser = async (userData) => await axios.post(API_URL, userData).then(res => res.data);
export const updateUser = async (id, updatedData) => await axios.put(`${API_URL}/${id}`, updatedData).then(res => res.data);
export const deleteUser = async (id) => await axios.delete(`${API_URL}/${id}`);
