import axios from "axios";

const loginCheck = async () => {
    try {
        const response = await axios.get('/api/auth/check-login', { withCredentials: true });
        return response.status === 200;
    } catch (error) {
        return false;
    }
};

export default loginCheck;