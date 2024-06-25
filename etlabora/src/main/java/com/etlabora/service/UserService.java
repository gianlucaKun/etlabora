package com.etlabora.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etlabora.dto.UserDTO;
import com.etlabora.entity.User;
import com.etlabora.mapper.UserMapper;
import com.etlabora.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository uRepo;
	
	@Autowired
	private UserMapper uMap;
	
	
	
	public List<UserDTO> findAllService () {
		
		List<User> listaUtenti = uRepo.findAll();
		return uMap.toDtoList(listaUtenti);
	}


	public boolean findByEmail (String email) {
		User finded = uRepo.findByEmail(email);
		if (finded != null) {
			return true;
		}
		return false;
	}

	public UserDTO createService(User u) {
		boolean finded = findByEmail(u.getEmail());
		
		if (finded ) {
			return null;
		} else  {
		
			User created = uRepo.save(u);
			return uMap.toDto(created);
		}
	}
}
