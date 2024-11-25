package org.swz.controller.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.swz.mapper.UserMapper;
import org.swz.pojo.User;
import org.swz.service.acount.LoginImpl;
import org.swz.service.acount.RegisterImpl;

import java.util.List;
import java.util.Map;

@RestController
public class UserController {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RegisterImpl registerImpl;

    @Autowired
    private LoginImpl loginImpl;


    @PostMapping("/user/login/")
    public Map<String,String>login(@RequestParam String username, @RequestParam String password){

        Map<String, String> loginuser = loginImpl.login(username, password);
        return loginuser;
    }

    @GetMapping("/user/all/")
    public List<User> getAllUser() {
        return userMapper.selectList(null);
    }

    @GetMapping("/user/{userId}/")
    public User getUserById(@PathVariable int userId) {
        return userMapper.selectById(userId);
    }


    @PostMapping("/user/add/")
    public String addUser(@RequestParam String username,@RequestParam String password,@RequestParam String confirmedPassword) {
        Map<String, String> register = registerImpl.register(username, password, confirmedPassword);
        return register.get("error_message");
    }



    @GetMapping("/user/delete/{userId}/")
    public String deleteUser(@PathVariable int userId) {
        userMapper.deleteById(userId);
        return "删除成功";
    }

}


