import axios from "axios";

const deleteBoard = async (boardId) => {
    try{
        const response = await axios.delete(
            `api/board/${boardId}`,
            
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        return response.data;
    }catch (error) {
        console.error("Error deleting board:", error);
        throw error;
    }
}
export default deleteBoard;