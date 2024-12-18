package org.swz.consumer;
import com.alibaba.fastjson2.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Component;
import org.swz.mapper.UserMapper;
import org.swz.pojo.User;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
@ServerEndpoint(value="/websocket/{token}")
public class WebSocketServer {
    private User user;
    //对于每一个客户端都有一个websocket连接，维护所有的链接,根据用户的id给对应的连接发请求
    private static final ConcurrentHashMap<Integer, WebSocketServer> sessionPool = new ConcurrentHashMap<>(); //所有实例共用map,但是在不同线程中，所以需要是线程安全的
    private static final Set<User>MatchPool = new HashSet<>();
    private Session session = null; //维护该session
    private static UserMapper userMapper;

    private Game game = null;

    //不是单例的，需要定义成独一份的变量
    @Autowired
    public void setUserMapper(UserMapper userMapper) {
        WebSocketServer.userMapper = userMapper;
    }

    @OnOpen
    public void OnOpen(Session session, @PathParam("token") String token) throws IOException {

        this.session = session; //存储session
        System.out.println("建立连接");
        Integer userID = Integer.parseInt(token);
        User user = userMapper.selectById(userID);
        this.user = user;
        if(this.user!=null) {
            sessionPool.put(user.getId(), this);
        }
        else{
            this.session.close();
        }
        System.out.println(sessionPool);

    }

    @OnClose
    public void OnClose() {
        System.out.println("关闭连接");
        if (this.user != null) {
            sessionPool.remove(this.user.getId());
        }
    }


    public void match(){
        System.out.println("开始匹配");
        MatchPool.add(this.user);


        while(MatchPool.size() >=2){
            System.out.println("可以匹配了");
            Iterator<User> it = MatchPool.iterator();
            User a = it.next(), b = it.next();


            System.out.println(a.getUsername());
            System.out.println(b.getUsername());
            MatchPool.remove(a);
            MatchPool.remove(b);

            //发送匹配结果
            JSONObject respA=new JSONObject();
            JSONObject respB=new JSONObject();
            respA.put("event","start_matching");
            respA.put("opponent_username",b.getUsername());
            respA.put("opponent_userphoto",b.getUserphoto());


            respB.put("event","start_matching");
            respB.put("opponent_username",a.getUsername());
            respB.put("opponent_userphoto",a.getUserphoto());

            WebSocketServer.sessionPool.get(a.getId()).sendMessage(respA.toJSONString());
            WebSocketServer.sessionPool.get(b.getId()).sendMessage(respB.toJSONString());
        }
    }

    //服务端向客户端发消息
    public void sendMessage(String message){
        //异步通信
        synchronized (this.session){
            try{
                this.session.getBasicRemote().sendText(message);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

        }
    }


    public void StopMatch()
    {
        System.out.println("取消匹配");
        MatchPool.remove(user);
    }


    public void move(Integer direction){
        if(game.getPlayerA().getId().equals(user.getId())){
            game.setNextstepA(direction);
        } else if (game.getPlayerB().getId().equals(user.getId())) {
            game.setNextstepB(direction);
        }
    }

    //处理客户端的输入
    @OnMessage
    public void OnMessage(String message, Session session) {
        //当做一个路由
        System.out.println("接收到请求");

        JSONObject data = JSONObject.parseObject(message);
        String event = data.getString("event");
        System.out.println(this.user);

        if("start-matching".equals(event)){
            match();
        }
        else if("cancel-matching".equals(event)){
            StopMatch();
        }else if("move".equals(event)){
            move(data.getInteger("direction"));
        }
    }


    @OnError
    public void OnError(@PathParam("token") String token, Session session, Throwable throwable) {
        throwable.printStackTrace(); //抛出异常
    }
}
