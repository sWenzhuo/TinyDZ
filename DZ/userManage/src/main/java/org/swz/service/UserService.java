package org.swz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.swz.mapper.UserMapper;
import org.swz.pojo.User;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;


    public User vaild(String username, String password) throws Exception {
        User user = userMapper.getUserByUsername(username);
        if ((user == null) && user.getPassword().equals(password)) {
            return null;
        }
        else{
            return user;

        }

    }

    public User isExist(String username) throws Exception {
        User user = userMapper.getUserByUsername(username);
        if (user == null) return null;
        else return user;
    }



    //增加
    public  String creatUser(String username, String password) {
        try {
            User user = new User();
            user.setId(null);
            user.setUsername(username);
            user.setPassword(password);
            userMapper.insert(user);
            //
            return "注册成功";
        }catch (Exception e){
            e.printStackTrace();
        }

        return "服务器无响应";
    }


    //修改
    public void updateUser(Integer id, User newUser){
        try {
            User user = userMapper.selectById(id);
            user.setUsername(newUser.getUsername());
            user.setPassword(newUser.getPassword());
            user.setIntroduction(newUser.getIntroduction());
            userMapper.updateById(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    //查询
    public User readUser(Integer id){
        try {
            return userMapper.selectById(id);

        }catch (Exception e){
            e.printStackTrace();
        }
        return null;

    }

    public User readUser(String username){
        try {
            return userMapper.getUserByUsername(username);

        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }



    public List<User> readAllUser(Object ob){

        return java.util.Collections.emptyList();
    }

    //删除
    public void deleteUsser(Object ob){



    }
}
