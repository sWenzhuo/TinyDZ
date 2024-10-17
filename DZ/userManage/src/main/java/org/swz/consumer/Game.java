package org.swz.consumer;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.omg.CORBA.PUBLIC_MEMBER;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Game extends Thread {

    private Integer[][] map;
    private Player playerA;  //两名玩家
    private Player playerB;

    private Integer nextstepA=null;
    private Integer nextstepB=null;

    private String status = "playing";


    public void setNextstepA(Integer nextstepA) {
        this.nextstepA = nextstepA;
    }

    public void setNextstepB(Integer nextstepB) {
        this.nextstepB = nextstepB;
    }

    @Override
    public void run() {
        //开始游戏,等待前端渲染
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        for(int i=0;i<1000;i++)
        {
            //等待用户输入




        }

    }
}
