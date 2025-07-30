import axios from "axios";

const acceptOrder = async (orderId) =>{
    const res = await axios.patch(
        `/api/orders/${orderId}/accept`
        ,null, {
        withCredentials: true,
    });
    return res.data;
}

export default acceptOrder;