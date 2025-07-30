import axios from "axios";

const getMyAnimalOrders = async (userId,page)=>{
    const res = await axios.get(
        `/api/animals/user/${userId}?page=${page}&size=10`,
        {
            withCredentials: true,
        }
    )
    return res.data
}

export default getMyAnimalOrders