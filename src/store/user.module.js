import Usersservice from '../service/user.service'

export const user = {
    namespaced:true,
    state:{},
    actions:{
        getProfile({commit},id){
            console.log(id)
            return Usersservice.getprofile(id).then(
                response=>{
                    // console.log(response)
                    commit('test',response);
                    return response
                },
                error=>{
                    // commit('signinFailure');
                    return Promise.reject(error)
                })
            },

    },
    mutations:{
        test(){

        }

    },
    getters:{

    }

}