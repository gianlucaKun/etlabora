package com.etlabora.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.etlabora.entity.Location;

public interface LocationRepositoy extends JpaRepository<Location, Long>{

}
