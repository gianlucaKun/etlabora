package com.ita.studying.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.ita.studying.DTO.ProductDTO;
import com.ita.studying.entity.Product;



@Mapper
public interface ProductMapper {
	
	Product toEntity ( ProductDTO dto );
	
	ProductDTO toDTO ( Product product );
	
	List<Product> toListEntity ( List<ProductDTO> dto );
	
	List<ProductDTO> toListDTO ( List<Product> product );

}
