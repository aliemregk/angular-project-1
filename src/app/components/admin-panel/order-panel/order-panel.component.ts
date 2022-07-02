import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-order-panel',
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.css']
})
export class OrderPanelComponent implements OnInit {

  items: Order[] = [];
  dataLoaded = false;
  constructor(private orderService: OrderService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe((response) => {
      this.items = response.data
      this.dataLoaded = true
    })
  }

  delivered(order: Order) {
    if (!order.isDelivered) {
      order.deliveryDate = formatDate(new Date(), 'dd/MM/yyyy', 'en');
      order.isDelivered = true;
      console.log(order.deliveryDate);
      this.orderService.update(order).subscribe()
      this.toastrService.info("Order updated.")
    }
    else {
      this.toastrService.info("Order already delivered.")
    }
  }

  deleteOrder(order: Order) {
    this.orderService.delete(order).subscribe({
      next: (response) => this.toastrService.info("Order deleted." , response.message),
      error: (errorResponse) => this.toastrService.error("Cant deleted." , errorResponse.message),
      complete: () => this.getOrders()
    })
  }
}
