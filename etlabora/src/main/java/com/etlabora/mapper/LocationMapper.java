package com.etlabora.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.etlabora.dto.LocationDTO;
import com.etlabora.entity.Location;

@Mapper
public interface LocationMapper {

	Location toEntity (LocationDTO dto);
	
	LocationDTO toDto (Location e);
	
	List<Location> toEntityList (List<LocationDTO > dto);
	
	List<LocationDTO > toDtoList (List<Location> e);
}
