import axios from "axios";

const AnimalOrderDetails = async (animalId)=>{
    const res = await axios.get(
        `/api/orders/uploader/${animalId}`,{
            withCredentials:true,
        }
    )
    return res.data
}

export default AnimalOrderDetails;