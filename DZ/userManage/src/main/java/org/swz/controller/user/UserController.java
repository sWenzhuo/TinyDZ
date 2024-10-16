package org.swz.controller.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.swz.pojo.User;
import org.swz.service.UserService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("user")
public class UserController{
    @Autowired
    private UserService userService;
    @PostMapping("/login")
    public @ResponseBody User login(@RequestBody Map<String,Object>loginData , HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
        //在客户端的cookie中查找sessionID如果已经登录则直接登录
        String username = loginData.get("username").toString();
        String password = loginData.get("password").toString();
        Cookie[] cookies = request.getCookies();
        String sid = null;
        if(cookies != null)
        {
            for(Cookie cookie : cookies)
            {
                if(cookie.getName().equals("sessionId")){
                    sid=cookie.getValue();
                    break;
                }
            }
        }
        if(sid!=null&&sid.equals(session.getId()))
        {
            //根据sessionID找到user
            User user = userService.readUser(username);
            return user;
        }
        else{
            //验证用户名和密码
            User filterUser =userService.vaild(username,password);
            if(filterUser!=null)
            {
                session.setMaxInactiveInterval(60*60);
                session.setAttribute("username", username);
                Cookie cookie = new Cookie("sessionId",session.getId());
                cookie.setHttpOnly(true); // 防止XSS攻击
                cookie.setPath("/"); // 设置cookie的作用路径
                response.addCookie(cookie); // 将cookie添加到响应中

                //得到user
                return filterUser;
            }
            else{
                System.out.println("用户不存在或者用户名或者密码不正确!");
                return null;
            }
        }
    }


    @PostMapping("/register")
    public @ResponseBody Map<String,User>  register(@RequestBody Map<String,Object>registerData) throws Exception {
        String username= registerData.get("username").toString();
        String password= registerData.get("password").toString();
        String confirmPassword= registerData.get("confirmPassword").toString();
        if(password.equals(confirmPassword)){
            //验证用户名是否唯一
            User user = userService.isExist(username);

            if(user==null)
            {
                String message = userService.creatUser(username,password);
                Map<String,User> map = new HashMap<>();
                User res  = userService.readUser(username);
                map.put(message,res);
                return  map;

            }
            else{
                Map<String,User> map = new HashMap<>();
                map.put("用户名已经存在",null);
                return map;
            }
        }
       return null;
    }


}
