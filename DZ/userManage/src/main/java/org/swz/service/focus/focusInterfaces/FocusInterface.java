package org.swz.service.focus.focusInterfaces;

import java.util.Map;

public interface FocusInterface {

    public Map<String,Object> getFocusList();

    public Map<String,Object> focus(String focusid);

    public Map<String,Object> cancelFocus(String focusid);


    public Map<String,Object> getFocusNum();
}
