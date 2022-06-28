import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { MainCategoryComponent } from './components/main-category/mainCategory.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CartComponent } from './components/cart/cart.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    MainCategoryComponent,
    BodyComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CategoryComponent,
    DiscountPipe,
    FilterPipePipe,
    CartComponent,
    ProductAddComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [NaviComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
