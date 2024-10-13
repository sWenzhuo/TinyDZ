package org.swz.controller.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.swz.service.UserService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


@RestController
@RequestMapping("user")
public class UserController{
    @Autowired
    private UserService userService;


    public ResponseEntity<Void> rediretWithEntity(String url)
    {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", url);
        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }


    @PostMapping("/login")
    public ResponseEntity<Void> login(String username, String password, HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
        //在客户端的cookie中查找sessionID如果已经登录则直接登录
        Cookie[] cookies = request.getCookies();
        String sid = null;
        if(cookies.length<=0)return rediretWithEntity("/login");

        for(Cookie cookie : cookies)
        {
            if(cookie.getName().equals("sessionId")){
                sid=cookie.getValue();
                break;
            }
        }
        if(sid!=null&&sid.equals(session.getId()))
        {
            return rediretWithEntity("/user/:id");
        }
        else{
            //验证用户名和密码
            boolean success =userService.checkLogin(username,password);
            if(success)
            {
                session.setMaxInactiveInterval(60*60);
                session.setAttribute("username", username);
                Cookie cookie = new Cookie("sessionId",session.getId());
                cookie.setHttpOnly(true); // 防止XSS攻击
                cookie.setPath("/"); // 设置cookie的作用路径
                response.addCookie(cookie); // 将cookie添加到响应中
                return rediretWithEntity("/user/:id");
            }
            else{
                System.out.println("用户不存在或者用户名或者密码不正确!");
                return rediretWithEntity("/login");
            }
        }
    }

    public void logout(){

    }


    public void  register(){

    }


}
