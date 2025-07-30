import axios from "axios";


const boardDetailAPI = async (boardId) => {
    try{
        const response = await axios.get(
            `/api/board/${boardId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        )
        return response.data;
    }catch (error) {
        console.error("Error fetching board detail:", error);
        throw error;
    }
}
export default boardDetailAPI;