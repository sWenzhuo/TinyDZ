package org.swz.service.acount.accountImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.swz.mapper.UserMapper;
import org.swz.pojo.User;
import org.swz.service.acount.acountInterfaces.Login;
import org.swz.utils.JwtUtil;

import java.util.HashMap;
import java.util.Map;

@Service
public class LoginImpl implements Login {

    @Autowired
    private AuthenticationManager authenticationManager;


    @Autowired
    private UserMapper userMapper;


    @Override
    public Map<String, String> login(String account, String pwd) {

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(account, pwd);

        Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        System.out.println(authentication);
        UserDetailsImpl loginUser = (UserDetailsImpl) authentication.getPrincipal();

        User user = loginUser.getUser();
        String jwt = JwtUtil.createJWT(user.getId().toString());

        Map<String, String> map = new HashMap<>();
        //返回user信息

        map.put("userId", user.getId().toString());
        map.put("username", user.getUsername());
        map.put("userintroduction",user.getIntroduction());
        map.put("userphoto",user.getIntroduction());
        map.put("friends",user.getId().toString());
        map.put("bots",user.getId().toString());



        map.put("error_message", "success");
        map.put("token", jwt);
        return map;
    }

}
