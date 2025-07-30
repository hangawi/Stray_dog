import axios from "axios";

const animalDelete=async(id)=>{
    try{
        await axios.delete(`/api/animals/${id}`);
    }catch (err){
        console.error("삭제 실패",err);
        throw err;
    }
    
}
export default animalDelete;