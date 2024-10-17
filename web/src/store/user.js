
import $ from "jquery";
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
                $.ajax({
                    url: "http://localhost:8081/user/login",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({
                        username: user.username,
                        password: user.password
                    }),
                    success: (response) => {

                        const userinfo = response
                        commit('setUserInfo', userinfo);
                        commit('setUserAuthenticated', true);
                        resolve({
                            message: `${userinfo.username} 登录成功`,
                            userinfo: userinfo,
                        });
                    },
                    error: (xhr) => {
                        // 登录失败
                        reject({
                            message: "用户名或者密码错误",
                            code: xhr.status
                        });
                    }
                })
            })
        },



        logout({commit})
        {
            commit("setUserInfo",null);
            commit("setUserAuthenticated",false);
        },



        register({commit},userRegister)
        {
            return new Promise((resolve,reject)=>{
                if(userRegister.password!=userRegister.confirmword)
                {
                    console.log(userRegister.password);
                    console.log(userRegister.confirmPassword);
                    console.log("两次密码不一致");
                    reject({
                        message:"两次密码不一致",
                        code:401
                    })
                }
                else
                {
                    //注册逻辑
                    $.ajax({
                        url: "http://localhost:8081/user/register",
                        type: "POST",
                        contentType: "application/json",
                        data: JSON.stringify({
                            username: userRegister.username,
                            password: userRegister.password,
                            confirmPassword:userRegister.confirmword,
                        }),
                        success: (response) => {
                     
                            // 检查响应中是否存在 "注册成功" 字段
                            if (response && response["注册成功"]) {
                                    const userinfo = response["注册成功"];
                                    console.log("用户信息:", userinfo);
        
                                    // 将用户信息提交到 Vuex 的状态管理中
                                    commit('setUserInfo', userinfo);
                                    commit('setUserAuthenticated', true);
        
                                     // 解析 Promise 并返回成功信息
                                    resolve({
                                        message: `${userinfo.username} 注册成功并已自动登录`,
                                        userinfo: userinfo,
                                    });
                            } else {
                            // 当 "注册成功" 不存在时，处理此情况
                                console.log("注册失败或响应中缺少用户信息");
                                reject({
                                        message: "注册失败或服务器未返回有效的用户信息",
                                        code: 500
                                });
                            }
                        },
                        error: (xhr) => {
                            // 注册失败
                            
                            reject({
                                message: "服务端无响应",
                                code: xhr.status
                            });
                        }
                    })

                    //自动登录
                }

            })

        }
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