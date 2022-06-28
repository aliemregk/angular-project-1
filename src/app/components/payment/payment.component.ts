import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  total:number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getTotalPrice();
  }

  getTotalPrice(){
    this.total = this.cartService.getTotalPrice();
  }
}
