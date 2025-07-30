import axios from "axios";

const newAnimal=async(animalData)=>{
    const res = await axios.post(
        `/api/animals`,animalData,{
            withCredentials: true,
        }
    );
    return res.data
}
export default newAnimal;