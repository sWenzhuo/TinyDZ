package org.swz.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.swz.pojo.User;
import org.swz.service.acount.accountImpl.UserDetailsImpl;


@Service
public class GetJwtUserImpl implements GetJwtUser {

    @Override
    public User getUser() {
        UsernamePasswordAuthenticationToken authentication =(UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl loginUser =(UserDetailsImpl) authentication.getPrincipal();
        return loginUser.getUser();
    }
}
