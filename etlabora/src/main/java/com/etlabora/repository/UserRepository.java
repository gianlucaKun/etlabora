package com.etlabora.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etlabora.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);

}
