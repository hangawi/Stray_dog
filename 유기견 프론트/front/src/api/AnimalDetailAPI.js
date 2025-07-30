import axios from "axios";

const animalDetail=async(id)=>{
    const res = await axios.get(
        `/api/animals/${id}`,{
            withCredentials: true,
        }
    );
    return res.data;
}
export default animalDetail;