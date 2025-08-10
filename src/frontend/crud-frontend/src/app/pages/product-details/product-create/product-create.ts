import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-create',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButton,
    RouterLink,
  ],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate {
  private _productService = inject(ProductsService);
  private _router = inject(Router);
  private _snackBar = inject(MatSnackBar);

  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';

  onSubmit(): void {
    // Validação simples para não enviar dados em branco
    if (!this.productName || !this.productPrice || !this.productDescription) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newProduct: Partial<Product> = {
      name: this.productName,
      price: this.productPrice,
      description: this.productDescription,
    };

    console.log('Enviando novo produto para a API:', newProduct);

    this._productService.addProduct(newProduct).subscribe({
      next: (productCriado) => {
        console.log('Produto criado com sucesso:', productCriado);

        // Limpeza do formulário
        this.productName = '';
        this.productPrice = 0;
        this.productDescription = '';

        this.openSnackBar('Produto criado com sucesso!', 'Fechar');

        // Redireciona para a lista de produtos
        this._router.navigate(['/']);
      },
      error: (erro) => {
        console.error('Falha ao criar produto:', erro);
        alert('Ocorreu um erro ao tentar criar o produto.');
      },
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
