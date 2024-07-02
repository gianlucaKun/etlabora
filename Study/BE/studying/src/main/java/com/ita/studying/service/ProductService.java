package com.ita.studying.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ita.studying.DTO.ProductDTO;
import com.ita.studying.entity.Product;
import com.ita.studying.mapper.ProductMapper;
import com.ita.studying.repository.ProductRepository;



@Service
public class ProductService {
	
	@Autowired
	private ProductRepository pRepository;

	@Autowired
	private ProductMapper pMapper;
	
	public List<ProductDTO> getAllService() {

		List<Product> listaProdotti = pRepository.findAll();
		
		return pMapper.toListDTO(listaProdotti);
	}

	public ProductDTO createService(ProductDTO p) {
		
		Product saved = pMapper.toEntity(p);
		pRepository.save(saved);
		return pMapper.toDTO(saved);
	}

	 public ProductDTO modifyService(Long id, Product p) {
	        Optional<Product> finded = pRepository.findById(id);

	        if (finded.isPresent()) {
	            Product existingProduct = finded.get();
	            existingProduct.setTitle(p.getTitle());
	            existingProduct.setImgUrl(p.getImgUrl());
	            existingProduct.setPrice(p.getPrice());
	            existingProduct.setQuantity(p.getQuantity());
	            Product updatedProduct = pRepository.save(existingProduct);
	            return pMapper.toDTO(updatedProduct);
	        } else {
	            throw new RuntimeException ("Product with ID " + id + " not found");
	        }
	    }

	public ProductDTO getService(Long id) {
		 Optional<Product> finded = pRepository.findById(id);
		 
		 if(finded.isPresent()) {
			 Product existing = finded.get();
			 return pMapper.toDTO(existing);
		 } else {
	            throw new RuntimeException ("Product with ID " + id + " not found");
	        }
	}

	public void deleteService(Long id) {
	 Optional<Product> finded = pRepository.findById(id);
		 
		 if(finded.isPresent()) {
			 pRepository.deleteById(id);
		 } else {
	            throw new RuntimeException ("Product with ID " + id + " not found");
	        }
	}

}
