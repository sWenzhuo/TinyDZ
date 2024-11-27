package org.swz.service.acount.accountImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.swz.pojo.User;
import org.swz.service.GetJwtUser;
import org.swz.service.GetJwtUserImpl;
import org.swz.service.acount.acountInterfaces.UserInfo;

import java.util.HashMap;
import java.util.Map;

//根据jwt返回用户信息
@Service
public class UserInfoImpl implements UserInfo {
    
    @Autowired
    private GetJwtUserImpl getJwtUser;

    @Override
    public Map<String, String> getinfo() {
        User user = getJwtUser.getUser();
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
