import axios from "axios";

const deleteUser = async () => {
    try{
        const response = await axios.delete(
            `/api/user/withdraw`,
            
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        return response.data;
    }catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}
export default deleteUser;