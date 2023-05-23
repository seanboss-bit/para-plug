import axios from "axios";

const BASE_URL = "http://localhost:5000/";
// const BASE_URL = "https://real-estate-web.onrender.com";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTBiZmE1NWU4ZjE5MTU1M2Q2NTMwNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjIwNDQwNDksImV4cCI6MTY2MjMwMzI0OX0.Dyxz6PQnkKN9BcRJYvl3-nxz1Yamw8ITAS0e5l8K6oE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
