package io.github.silviolqm.crud_api.data;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.silviolqm.crud_api.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    
}
