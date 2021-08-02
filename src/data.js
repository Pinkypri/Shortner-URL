import axios from "axios";



export const shorturl= async (userData) =>{
    try {
      const config = {
        headers: {
         
          "Content-Type": "application/json",
      
        },
       } 

       const url ="https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten";
     const result= {
       url: userData,
     };
        const {data}=await axios.post(url,result,config);
        return data;
    } catch (error) {
        return error.message;
    }
}