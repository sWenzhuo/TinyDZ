package org.swz.service.acount;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.swz.mapper.UserMapper;
import org.swz.pojo.User;
import org.swz.service.Login;
import org.swz.utils.JwtUtil;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;



@Service
public class LoginImpl implements Login, UserDetailsService {

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
        map.put("error_message", "success");
        map.put("token", jwt);
        return map;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userMapper.getUserByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new UserDetailsImpl(user);
    }
}
