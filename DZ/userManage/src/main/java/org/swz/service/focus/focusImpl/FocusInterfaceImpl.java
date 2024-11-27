package org.swz.service.focus.focusImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.swz.service.GetJwtUser;
import org.swz.service.GetJwtUserImpl;
import org.swz.service.focus.focusInterfaces.FocusInterface;

import java.util.Collections;
import java.util.Map;


@Service
public class FocusInterfaceImpl implements FocusInterface {

    @Autowired
    private GetJwtUserImpl getJwtUser;

    //找到所有关注的用户
    @Override
    public Map<String, Object> getFocusList() {
        return Collections.emptyMap();
    }


    //关注某个用户
    @Override
    public Map<String, Object> focus(String focusid) {
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
        return Collections.emptyMap();
    }
}
