package com.etlabora.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.etlabora.dto.UserDTO;
import com.etlabora.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
	
	List<User> toUserList ( List<UserDTO> dto);
	
	List<UserDTO> toDtoList (List<User> entity) ;
	
	UserDTO toDto (User user);
	
	User toEntity (UserDTO dto);
}
