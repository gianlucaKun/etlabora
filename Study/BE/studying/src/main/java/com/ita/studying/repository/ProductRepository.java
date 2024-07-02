package com.ita.studying.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ita.studying.entity.Product;


public interface ProductRepository extends JpaRepository<Product, Long>{

}
