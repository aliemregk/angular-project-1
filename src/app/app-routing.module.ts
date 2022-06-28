import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: BodyComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/category/:id", component: ProductsComponent },
  { path: "products/productdetails", component: ProductDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "products/add", component: ProductAddComponent },
  { path: "cart/payment", component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
