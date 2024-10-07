const user ={
    state(){
        return{
            userInfo:null,
            isAuthenticated:false
        };
    },
    mutations:{

        setUserInfo(state,userInfo)
        {
            state.userInfo=userInfo;
        },

        setUserAuthenticated(state,isAuthenticated)
        {
            state.isAuthenticated=isAuthenticated;
        }

    },
    actions:{
        
        login({commit},user)
        {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                if(user.username == "swz"&& user.password=="12345")
                {
                    const userinfo = {username:user.username,password:user.password};
                    commit('setUserInfo',userinfo);
                    commit('setUserAuthenticated',true);
                    resolve(
                        {
                            message:user.username+"登录成功",
                            userinfo:user
                        }
                    )
                }
                else{
                    console.log("用户名或者密码错误");
                    reject(
                        {
                            message:"用户名或者密码错误",
                            code:401
                        }
                    )
                }
                },1000)
            })
        
        },
    },
    getters:{
        isAuthenticated(state)
        {
            return state.isAuthenticated;
        },
        userInfo(state)
        {
            return state.userInfo
        }

    }
};
export default user;