package io.github.silviolqm.crud_api.dto;

import io.github.silviolqm.crud_api.entity.Product;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ProductRequestDTO {
    
    @NotNull
    @Size(min = 1, max = 100, message = "Nome deve ter entre 1 e 100 caracteres")
    private String name;

    @Size(min = 1, max = 250, message = "Descrição deve ter entre 1 e 250 caracteres")
    private String description;

    @NotNull
    @Min(value = 0, message = "Preço não pode ser menor do que zero")
    private Double price;

    public Product toProduct() {
        Product product = Product.builder()
                .name(this.name)
                .description(this.description)
                .price(this.price)
                .build();
        return product;
    }
}