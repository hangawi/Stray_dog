import axios from "axios";

const createNewBoard = async (title, content) => {
    try{
        const response = await axios.post(
            '/api/board',
            {title,content},
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            },
            
        );
        return response.data;
    }catch (error) {
        console.error("Error creating new board:", error);
        throw error;
    }
}
export default createNewBoard;