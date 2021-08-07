import axios from 'axios'
const url_api = "http://localhost:8080/api/";
class Users {
    getprofile = (id) =>{
        // return 'Hi';
        console.log(id)
        return axios.get(url_api+'profile/',{ params: { id_user:id} }).
        then((response)=>{
            console.log(response)
            return response.data
        })

    }

    
}
export default new Users();