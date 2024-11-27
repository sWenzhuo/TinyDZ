package org.swz.service.focus.focusImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.swz.service.GetJwtUserImpl;
import org.swz.service.focus.focusInterfaces.FanInterface;

import java.util.Collections;
import java.util.Map;

@Service
public class FanImpl implements FanInterface {

    @Autowired
    private GetJwtUserImpl getJwtUser;

    @Override
    public Map<String, Object> getFans() {
        return Collections.emptyMap();
    }

    @Override
    public Map<String, Object> getFansNum() {
        return Collections.emptyMap();
    }
}
