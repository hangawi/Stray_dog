import axios from "axios";

const getMyOrders=async(page)=>{
    const res = await axios.get(
        `/api/orders/my?page=${page}&size=10`,
        {
            withCredentials:true,
        }
    )
    return res.data;
}
export default getMyOrders;