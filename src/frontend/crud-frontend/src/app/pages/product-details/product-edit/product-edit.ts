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
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButton,
    RouterLink,
  ],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css',
})
export class ProductEdit {
  product$: Observable<Product>;
  private _productService = inject(ProductsService);
  private _router = inject(Router);
  private _snackBar = inject(MatSnackBar);
  private _route = inject(ActivatedRoute);

  productId: number = 0;
  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';

  constructor() {
    this.productId = Number(this._route.snapshot.paramMap.get('id'));
    this.product$ = this._productService.getProductById(this.productId);

    // Atualiza os campos do formulário
    this.product$.subscribe({
      next: (product) => {
        this.productName = product.name;
        this.productPrice = product.price;
        this.productDescription = product.description;
      },
      error: (error) => {
        console.error('Erro ao buscar produto:', error);
      },
    });
  }

  onSubmit(): void {
    // Validação simples para não enviar dados em branco
    if (!this.productName || !this.productPrice || !this.productDescription) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newProduct: Product = {
      id: this.productId,
      name: this.productName,
      price: this.productPrice,
      description: this.productDescription,
    };

    this._productService.editProduct(this.productId, newProduct).subscribe({
      next: (productEditado) => {
        console.log('Produto editado com sucesso:', productEditado);

        this.openSnackBar('Produto editado com sucesso!', 'Fechar');

        // Redireciona para a lista de produtos
        this._router.navigate(['/']);
      },
      error: (erro) => {
        console.error('Falha ao editar o produto:', erro);
        alert('Ocorreu um erro ao tentar editar o produto.');
      },
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
