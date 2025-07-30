import axios from "axios";

const getBoardList = async (page) => {
    try{
        const response = await axios.get(
            `/api/board?page=${page}&size=10`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        return response.data;
    }catch (error) {
        console.error("Error fetching board list:", error);
        throw error;
    }
}
export default getBoardList;