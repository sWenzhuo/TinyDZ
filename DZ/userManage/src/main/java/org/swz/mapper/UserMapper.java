package org.swz.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.swz.pojo.User;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
