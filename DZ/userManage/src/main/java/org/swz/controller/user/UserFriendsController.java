package org.swz.controller.user;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserFriendsController {


    //查看用户的所有好友
    @GetMapping("/user/friends")
    public Map<String, Object> userFriends() {
        return null;

    }

    //查看某一个好友的信息
    @GetMapping("/user/friend")
    public Map<String, Object> userFriend(@RequestParam Map<String, Object> params) {
        return null;
    }


    //关注某个好友


    //查看最近来访信息



}
