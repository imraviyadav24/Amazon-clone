import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-d3c4f/us-central1/api' //THE API CLOUD FUNCTION URL
});

export default instance;