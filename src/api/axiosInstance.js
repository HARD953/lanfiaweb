import axios from "axios"
const tokenString = localStorage.getItem('token');
const userToken = JSON.parse(tokenString);
 

//async function axiosInstance (){
   /* return  axios.create({
    baseUrl: "https://donateur.herokuapp.com/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken?.token ? userToken?.token : ""
      },
    timeout: 1000,
    withCredentials: true,
    
})*/
const axiosInstance = axios.create({
    baseURL: 'https://apidons.herokuapp.com/'
  });

 // return instance;
//}
export default axiosInstance