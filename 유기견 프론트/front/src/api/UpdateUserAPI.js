import axios from "axios";

const updateUser = async (pw,name,pn,age,addr) => {
    try{
        const response = await axios.put(
            '/api/user/update',
            {pw,name,pn,age,addr},
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            },
            
        );
        return response.data;
    }catch (error) {
        console.log(error)
    }
}
export default updateUser;