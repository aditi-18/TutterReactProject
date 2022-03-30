import axios from "axios";
// const BASE_URL = process.env.REACT_APP_BASE_URL

 const BASE_URL = "https://a4final.herokuapp.com";

const AUTH_API = `${BASE_URL}/api/auth`
const SECURITY_API = `${BASE_URL}/api/auth`;

const api = axios.create({
   withCredentials: true
});

export const signup = (user) =>
   api.post(`${AUTH_API}/signup`, user)
       .then(response => response.data);

export const login = (user) =>
       api.post(`${SECURITY_API}/login`, user)
           .then(response => response.data);
   
   export const logout = (user) =>
       api.post(`${SECURITY_API}/logout`, user)
           .then(response => response.data);
   
   export const profile = () =>
       api.post(`${SECURITY_API}/profile`)
           .then(response => response.data);