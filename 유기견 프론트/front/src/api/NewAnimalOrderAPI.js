import axios from "axios";

const requestAdoption = async (animalId)=>{
    const res = await axios.post(
        `/api/orders/${animalId}`,
        null,
        {
            withCredentials: true,
        }
    )
    return res.data
}

export default requestAdoption;