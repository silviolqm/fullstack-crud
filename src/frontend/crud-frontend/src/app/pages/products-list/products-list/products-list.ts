import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogDeleteConfirm } from '../dialog-delete-confirm/dialog-delete-confirm';
import { filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  imports: [MatCardModule, MatButtonModule, MatIcon, AsyncPipe, CurrencyPipe],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  products$: Observable<Product[]>;
  private _dialog = inject(MatDialog);
  private _productService = inject(ProductsService);
  private _snackBar = inject(MatSnackBar);
  private _router = inject(Router);

  constructor() {
    this.products$ = this._productService.getProducts();
  }

  loadProducts() {
    this.products$ = this._productService.getProducts();
  }

  confirmDelete(productId: number) {
    const dialogRef = this._dialog.open(DialogDeleteConfirm, {
      width: '250px',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      data: { id: productId },
    });

    dialogRef
      .afterClosed()
      .pipe(filter((result) => result === true))
      .subscribe(() => {
        this.loadProducts();
        this.openSnackBar('Produto excluído com sucesso!', 'Fechar');
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  editProduct(id: number) {
    this._router.navigate(['/edit', id]);
  }
}
