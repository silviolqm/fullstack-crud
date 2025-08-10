import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-dialog-delete-confirm',
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './dialog-delete-confirm.html',
  styleUrl: './dialog-delete-confirm.css',
})
export class DialogDeleteConfirm {
  private _dialogRef = inject(MatDialogRef<DialogDeleteConfirm>);
  private productService = inject(ProductsService);
  private data = inject(MAT_DIALOG_DATA) as { id: number };

  deleteProduct(): void {
    this.productService.deleteProduct(this.data.id).subscribe(() => {
      this._dialogRef.close(true);
    });
  }
}
