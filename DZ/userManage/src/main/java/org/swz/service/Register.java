package org.swz.service;

import java.util.Map;

public interface Register {


    public Map<String,String> register(String username,String password,String confirmedPassword);
}
