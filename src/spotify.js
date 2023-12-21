import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "b8dc4b6d709849028b3bfb81f3aada46";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `https://accounts.spotify.com/authorize?client_id=b8dc4b6d709849028b3bfb81f3aada46&redirect_uri=http://localhost:3000&scope=["user-library-read", "playlist-read-private"].join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;