/*import axios from 'axios'

const setAuthToken = (token) => {
    if (token) {
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common['Authorization'] = token
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken
*/

import api from "./api";

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["x-auth-token"] = token;
    // api.defaults.headers.common['Authorization'] = token
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
