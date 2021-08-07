import Authservice from '../service/auth.service'

const member  = JSON.parse(localStorage.getItem('member'))

const initialState = member
    ?{status:{signed:true},member}
    :{status:{signed:false},member}

    export const  auth =  {
        namespaced:true,
        state:initialState,
        actions:{

            signin({commit},member){
                return Authservice .signin(member).then(
                member=>{
                    console.log(member)
                    commit('singinSuccess',member);
                    return Promise.resolve(member)
                },
                error=>{
                    commit('signinFailure');
                    return Promise.reject(error)
                })
            },
            signout({commit}){
                Authservice.signout()
                commit('signout')
            },
            signup({commit},member){
                return Authservice.signup(member).then(
                    response=>{
                        commit('signupSuccess');
                        return Promise.resolve(response.data)
                    },
                    error=>{
                        commit('signupFailure');
                        return Promise.reject(error)
                    }
                )
            }
        },
        mutations:{    
            singinSuccess(state, member) {
            state.status.signed = true;
            state.member = member;
          },
          signinFailure(state){
            state.status.signed = false;
            state.member = null
          },
          signout(state){
            state.status.signed = false;
            state.member= null
          },
          signupSuccess(state){
            state.status.signed = false
          },
          signupFailure(state){
            state.status.signed = false
          }
        },
        getters:{

        }

    }