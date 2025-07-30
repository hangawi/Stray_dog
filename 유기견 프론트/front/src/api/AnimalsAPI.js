import axios from "axios";

const animals = async(page=0,size=12)=>{
    const res = await axios.get(
            `/api/animals?page=${page}&size=${size}`,{
            withCredentials: true,
        });
    return res.data
};
export default animals;