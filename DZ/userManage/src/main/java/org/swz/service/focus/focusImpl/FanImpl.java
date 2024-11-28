package org.swz.service.focus.focusImpl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.swz.mapper.FocusMapper;
import org.swz.pojo.Focus;
import org.swz.pojo.User;
import org.swz.service.GetJwtUserImpl;
import org.swz.service.focus.focusInterfaces.FanInterface;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class FanImpl implements FanInterface {

    @Autowired
    private GetJwtUserImpl getJwtUser;


    @Autowired
    private FocusMapper focusMapper;

    @Override
    public Map<String, Object> getFans() {
        User user = getJwtUser.getUser();
        Integer id = user.getId();
        QueryWrapper<Focus> queryWrapper = new QueryWrapper<Focus>()
                .select("userid")
                .eq("focusid", id);
        List<Focus> fans = focusMapper.selectList(queryWrapper);


        System.out.println(fans);
        Map<String, Object> map = new HashMap<String, Object>();

        map.put("error_message","success");
        map.put("fanslist", fans);
        return map;
        //搜索专注列表
    }

    @Override
    public Map<String, Object> getFansNum() {
        User user = getJwtUser.getUser();
        Integer id = user.getId();
        QueryWrapper<Focus> queryWrapper = new QueryWrapper<Focus>()
                .select("userid")
                .eq("focusid", id);

        Long count = focusMapper.selectCount(queryWrapper);

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("error_message","success");
        map.put("fansnum", count);

        return map;
    }
}
