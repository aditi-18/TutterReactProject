/* eslint-disable no-unused-vars */
import axios from "axios";
 const BASE_URL = "https://a4final.herokuapp.com/api";
//const BASE_URL = "http://localhost:4000";

const LOGIN_API = `${BASE_URL}/login`;
const USERS_API = `${BASE_URL}/users`;
const TUITS_API = `${BASE_URL}/tuits`;

export const createUser = (user) =>
  axios.post(`${USERS_API}`, user)
    .then(response => response.data);

    export const findAllUsers = () =>
    axios.get(USERS_API)
        .then(response => response.data);
        
export const findUserById = (uid) =>
    axios.get(`${USERS_API}/${uid}`)
        .then(response => response.data);

export const deleteUser = (uid) =>
  axios.delete(`${USERS_API}/${uid}`)
    .then(response => response.data);

export const deleteUsersByUsername = (username) =>
  axios.get(`${USERS_API}/username/${username}/delete`)
    .then(response => response.data);


export const findAllTuits = () =>
    axios.get(TUITS_API)
        .then(response => response.data);

export const findTuitById = (tid) =>
    axios.get(`${TUITS_API}/${tid}`)
        .then(response => response.data);

export const findTuitByUser = (uid) =>
    axios.get(`${USERS_API}/${uid}/tuits`)
        .then(response => response.data);
const service = {
  findAllUsers
}

export default service;