package io.github.silviolqm.crud_api.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import io.github.silviolqm.crud_api.dto.ProductRequestDTO;
import io.github.silviolqm.crud_api.dto.ProductResponseDTO;

import java.util.List;

public interface ProductService {
    
    List<ProductResponseDTO> getAllProducts();
    Page<ProductResponseDTO> getAllProducts(Pageable pageable); // Novo método com paginação
    ProductResponseDTO getProductById(Long id);
    ProductResponseDTO createProduct(ProductRequestDTO product);
    ProductResponseDTO updateProduct(Long id, ProductRequestDTO product);
    void deleteProduct(Long id);
}
