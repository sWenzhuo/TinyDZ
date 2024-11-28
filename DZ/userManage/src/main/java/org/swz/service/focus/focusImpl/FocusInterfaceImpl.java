package org.swz.service.focus.focusImpl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.swz.mapper.FocusMapper;
import org.swz.pojo.Focus;
import org.swz.pojo.User;
import org.swz.service.GetJwtUser;
import org.swz.service.GetJwtUserImpl;
import org.swz.service.focus.focusInterfaces.FocusInterface;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class FocusInterfaceImpl implements FocusInterface {

    @Autowired
    private GetJwtUserImpl getJwtUser;

    @Autowired
    private FocusMapper focusMapper;

    //找到所有关注的用户
    @Override
    public Map<String, Object> getFocusList() {
        User user = getJwtUser.getUser();
        Integer id = user.getId();
        QueryWrapper<Focus> queryWrapper = new QueryWrapper<Focus>()
                .select("focusid")
                .eq("userid", id);
        List<Focus> foci = focusMapper.selectList(queryWrapper);


        System.out.println(foci);
        Map<String, Object> map = new HashMap<String, Object>();
        
        map.put("error_message","success");
        map.put("focuslist", foci);
        return map;
    }


    //关注某个用户
    @Override
    public Map<String, Object> focus(String focusid) {
        //查找用户id是否存在

        return Collections.emptyMap();
    }


    //取消对某个用户的关注
    @Override
    public Map<String, Object> cancelFocus(String focusid) {
        return Collections.emptyMap();
    }


    @Override
    public Map<String,Object> getFocusNum()
    {
        User user = getJwtUser.getUser();
        Integer id = user.getId();
        QueryWrapper<Focus> queryWrapper = new QueryWrapper<Focus>()
                .select("focusid")
                .eq("userid", id);
        Long count = focusMapper.selectCount(queryWrapper);

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("error_message","success");
        map.put("focusnum", count);


        return map;

    }
}
