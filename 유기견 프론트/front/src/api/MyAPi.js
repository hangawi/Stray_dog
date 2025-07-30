import axios from "axios";


const MyDetail = async () => {
    try{
        const response = await axios.get(
            `/api/user/me`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        )
        return response.data;
    } catch (error) {
        console.error("Error fetching user detail:", error);
        throw error;
    }
}
export default MyDetail;