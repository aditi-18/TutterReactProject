import axios from "axios";

const BASE_URL = "https://a4final.herokuapp.com"
const USERS_API = `${BASE_URL}/api/users`;
const TUITS_API = `${BASE_URL}/api/tuits`;

const api = axios.create({withCredentials: true});

/**
 * Tuits  disliked by the user
 * @param {string} userId user id's
 * @returns {Promise<AxiosResponse<any>>} response containing tuits list.
 */
export const findAllTuitsDislikedByUser = (userId) =>
  api.get(`${USERS_API}/${userId}/dislikes`).then(response => response.data);

/**
 * List of all users who that disliked a tuit
 * @param {string} tid tuit's id
 * @returns {Promise<AxiosResponse<any>>} response containing list of users
 */
export const findAllUsersThatDislikedTuit = (tid) =>
  api.get(`${TUITS_API}/${tid}/dislikes`).then(response => response.data);

/**
 * Toggles dislike
 * @param {string} uid user's id
 * @param {string} tid tuit's id
 * @returns {Promise<AxiosResponse<any>>} status of operation
 */
export const userTogglesTuitDislikes = (uid, tid) =>
  api.put(`${USERS_API}/${uid}/dislikes/${tid}`).then(response => response.data);