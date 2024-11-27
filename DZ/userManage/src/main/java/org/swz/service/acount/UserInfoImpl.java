package org.swz.service.acount;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.swz.pojo.User;
import org.swz.service.UserInfo;

import java.util.HashMap;
import java.util.Map;

//根据jwt返回用户信息
@Service
public class UserInfoImpl implements UserInfo {
    @Override
    public Map<String, String> getinfo() {
        UsernamePasswordAuthenticationToken authentication =(UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl loginUser =(UserDetailsImpl) authentication.getPrincipal();
        User user =  loginUser.getUser();
        Map<String, String> map = new HashMap<>();

        if(user!=null){

            map.put("error_message", "success");
            map.put("id", user.getId().toString());
            map.put("username", user.getUsername());
            map.put("photo",user.getUserphoto());
            map.put("usergrade",user.getUsergrade().toString());

            return map;

        }
        else{
            map.put("error_message", "用户未登录");
            return map;
        }
    }

}
