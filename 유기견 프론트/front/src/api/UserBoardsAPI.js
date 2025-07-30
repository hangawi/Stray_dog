import axios from "axios";

const getUserBoardList = async (page) => {
    try{
        const response = await axios.get(
            `/api/user/boards?page=${page}&size=10`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        return response.data;
    }catch (error) {
        console.error("Error fetching userboard list:", error);
        throw error;
    }
}
export default getUserBoardList;