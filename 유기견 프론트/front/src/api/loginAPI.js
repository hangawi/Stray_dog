import axios from 'axios';

const login = async (email, pw) => {
    try {
        const response = await axios.post(
        '/api/auth/login',
        { email, pw },
        {
            headers: {
            'Content-Type': 'application/json',
            },
            withCredentials: true, // 세션을 쿠키로 관리할 경우 필요
        }
        );

        console.log('로그인 성공:', response.data);
        // 필요한 처리 (예: 리다이렉트 또는 상태 저장)
    } catch (error) {
        if (error.response && error.response.status === 401) {
        alert('아이디 또는 비밀번호 오류');
        } else {
        console.error('로그인 중 오류 발생:', error);
        }
    }
}
export default login;