package org.swz.controller.user;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class FansController {





    //查看关注列表
    @GetMapping("/user/focuslist")
    public Map<String,Object> getfocus()
    {
        return null;
    }

    //查看粉丝列表
    @GetMapping("/user/fanslist")
    public Map<String, Object> getFans() {
        return null;

    }

    //关注
    @GetMapping("/user/focus/")
    public Map<String, Object> Focus() {
        return null;
    }


    //取消关注
    @GetMapping("/user/cancelFocus")
    public Map<String, Object> CancelFocus() {
        return null;
    }
}
