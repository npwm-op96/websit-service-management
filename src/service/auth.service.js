import axios from 'axios'
const url_api = "http://localhost:8080/api/auth/";

class Auth {
    signin = (member)=>{
        return axios.post(url_api+"signin",{
            username:member.username,
            password:member.password
         }).then((response)=>{
             if(response.data.accessToken){
                 localStorage.setItem('member',JSON.stringify(response.data))
             }
             return response.data
         });
    }
    signout = ()=>{
        localStorage.removeItem("member")
    }
    signup = (member)=>{
        return axios.post(url_api+"signup",{
            username:member.username,
            password:member.password
        });
    }
}
export default new Auth();