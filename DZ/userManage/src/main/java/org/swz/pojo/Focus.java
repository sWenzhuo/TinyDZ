package org.swz.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Focus {
    @TableId(type=IdType.AUTO)
    private Integer id;
    private Integer userid;
    private Integer focusid;
}