package org.swz.controller.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.swz.mapper.UserMapper;
import org.swz.pojo.Focus;
import org.swz.pojo.User;
import org.swz.service.focus.focusImpl.FanImpl;
import org.swz.service.focus.focusImpl.FocusInterfaceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class FansController {

    @Autowired
    FocusInterfaceImpl focusInterface;


    @Autowired
    FanImpl fanImpl;


    @Autowired
    UserMapper userMapper;


    //关注数目 ok
    @GetMapping("/user/focusnum/")
    public String focusNum() {
        Map<String, Object> focusNum = focusInterface.getFocusNum();
        if(focusNum.get("error_message").equals("success")){
            return focusNum.get("focusnum").toString();
        }
        else{
            return null;
        }
    }

    //粉丝数目

    @GetMapping("/user/fansnum/")
    public String fansNum() {
        Map<String, Object> fansNum = fanImpl.getFansNum();
        if(fansNum.get("error_message").equals("success")){
            return fansNum.get("fansnum").toString();
        }
        else{
            return null;
        }

    }


    //查看关注列表的详细信息
    @GetMapping("/user/focuslist/")
    public Map<String,Object> getfocus()
    {
        Map<String, Object> focusList = focusInterface.getFocusList();
        //返回关注人的信息
        List<Focus> focuslist = (List)focusList.get("focuslist");
        System.out.println(focuslist);

        //取出相关的用户id
        List<Integer>focusid =new ArrayList<>();
        for(Focus item :focuslist)
        {
            focusid.add(item.getFocusid());
        }

        List<User> focusUsers = userMapper.selectBatchIds(focusid);

        HashMap<String, Object> res = new HashMap<>();
        res.put("error_message","success");
        res.put("focuslist",focusUsers);

        return res;

    }

    //查看粉丝列表的详细信息
    @GetMapping("/user/fanslist/")
    public Map<String, Object> getFans() {
        Map<String, Object> focusList = fanImpl.getFans();
        //返回关注人的信息
        List<Focus> fanslist = (List)focusList.get("fanslist");
        System.out.println(fanslist);

        //取出相关的用户id
        List<Integer>fansid =new ArrayList<>();
        for(Focus item :fanslist)
        {
            fansid.add(item.getUserid());
        }

        List<User> focusUsers = userMapper.selectBatchIds(fansid);

        HashMap<String, Object> res = new HashMap<>();
        res.put("error_message","success");
        res.put("fanslist",focusUsers);

        return res;

    }

    //关注
    @GetMapping("/user/focus/{focusid}")
    public Map<String, Object> Focus(String focusid) {
        return null;
    }


    //取消关注
    @GetMapping("/user/cancelFocus/{focusid}")
    public Map<String, Object> CancelFocus(String focusid) {
        return null;
    }



}
