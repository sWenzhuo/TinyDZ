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


    public boolean vaild(String username, String password) {

    }



    //增加
    public  void creatUser(String username, String password) {
        try {
            User user = new User();
            user.setUsername(username);
            user.setPassword(password);
            userMapper.insert(user);
        }catch (Exception e){
            e.printStackTrace();
        }
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

    }



    public List<User> readAllUser(Object ob){

        return java.util.Collections.emptyList();
    }

    //删除
    public void deleteUsser(Object ob){



    }
}
