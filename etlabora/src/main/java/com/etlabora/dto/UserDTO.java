package com.etlabora.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {
	
	
	private Long id;
	private String name;
	private String surname;
	private String username;
	private String email;
	private String password;
	
}
