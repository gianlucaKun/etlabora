package com.etlabora.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etlabora.dto.UserDTO;
import com.etlabora.entity.User;
import com.etlabora.service.UserService;


@RestController
@RequestMapping("/user")
public class UserController {

	
	@Autowired
	private UserService uServ;
	
	@GetMapping
	public List<UserDTO> findAllController () {
		return uServ.findAllService();
	}

	@PostMapping("/register")
	public UserDTO createUser (@RequestBody User u) {
		return uServ.createService(u);
	}
}
