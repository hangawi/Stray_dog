import axios from "axios";

const deletAnimalOrder = async(orderId)=>{
    const res = await axios.delete(
        `/api/orders/${orderId}`,
        {
            withCredentials: true,
        }
    )
    return res.data
}

export default deletAnimalOrder;