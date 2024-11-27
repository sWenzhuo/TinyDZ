package org.swz.controller.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.swz.mapper.UserMapper;
import org.swz.service.acount.accountImpl.LoginImpl;
import org.swz.service.acount.accountImpl.RegisterImpl;
import org.swz.service.acount.accountImpl.UserInfoImpl;

import java.util.Map;

@RestController
public class UserController {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RegisterImpl registerImpl;

    @Autowired
    private LoginImpl loginImpl;

    @Autowired
    private UserInfoImpl userInfoImpl;

    @PostMapping("/user/login/")
    public Map<String,String>login(@RequestBody Map<String,String> userLogin){
        String username = userLogin.get("username");
        String password = userLogin.get("password");

        Map<String, String> loginuser = loginImpl.login(username, password);
        return loginuser;
    }


    @GetMapping("/user/")
    public Map<String, String> getUserInfo() {
        //使用jwt token
        return userInfoImpl.getinfo();
    }



    @PostMapping("/user/add/")
    public String addUser(@RequestBody Map<String,Object> userRegisterInfo) {
        String username =(String)userRegisterInfo.get("username");
        String password =(String)userRegisterInfo.get("password");
        String confirmedPassword =(String)userRegisterInfo.get("confirmPassword");
        System.out.println(confirmedPassword);

        Map<String, String> register = registerImpl.register(username, password,confirmedPassword);
        return register.get("error_message");
    }



}


