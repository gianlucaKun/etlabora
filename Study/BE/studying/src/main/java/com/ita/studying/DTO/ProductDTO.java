package com.ita.studying.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
	
	
	private Long Id;
	
	private String title;
	private Double price;
	private Integer quantity;
	
	private String serial_number;
	
	private String imgUrl;

}
