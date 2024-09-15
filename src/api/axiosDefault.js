import axios from "axios";

axios.defaults.baseURL = 'https://mom-bc97d0e277e9.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;