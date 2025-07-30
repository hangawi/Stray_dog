import axios from "axios";

const logout = async () => {
    try {
        const response = await axios.post(
            '/api/auth/logout',
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            }
        );
        console.log('로그아웃 성공:', response.data);
        window.location.reload()
    } catch (error) {
        console.error('로그아웃 중 오류 발생:', error);
    }
}
export default logout;