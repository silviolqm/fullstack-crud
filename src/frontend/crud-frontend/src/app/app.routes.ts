import { Routes } from '@angular/router';
import { ProductCreate } from './pages/product-details/product-create/product-create';
import { ProductsList } from './pages/products-list/products-list/products-list';
import { ProductEdit } from './pages/product-details/product-edit/product-edit';

export const routes: Routes = [
  {
    path: 'create',
    component: ProductCreate,
  },
  {
    path: 'edit/:id',
    component: ProductEdit,
  },
  {
    path: '',
    pathMatch: 'full',
    component: ProductsList,
  },
];
