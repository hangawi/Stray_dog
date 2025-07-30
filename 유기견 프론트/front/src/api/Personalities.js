import axios from "axios";

const personalities = async()=>{
    const res = await axios.get(
        `/api/personalities`,{
            withCredentials: true,
        }
    );
    return res.data
}
export default personalities;