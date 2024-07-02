package com.ita.studying.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ita.studying.DTO.ProductDTO;
import com.ita.studying.entity.Product;
import com.ita.studying.service.ProductService;


@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private ProductService pService;
	@GetMapping("/{id}")
	private ProductDTO getController (@PathVariable Long id) {
		return pService.getService(id);
	}
	@GetMapping("/getAll")
	private List<ProductDTO> getAllController () {
		return pService.getAllService();
	}
	
	@PostMapping("/create")
	private ProductDTO createController (@RequestBody ProductDTO p) {
		return pService.createService(p);
	}
	
	@PutMapping("/edit/{id}")
	private ProductDTO modifyController (@PathVariable  Long id, @RequestBody Product p) {
		return pService.modifyService(id, p);
	}
	@DeleteMapping("/{id}")
	private void deleteController (@PathVariable Long id) {
		pService.deleteService(id);
	}
}
