import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-panel',
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.css']
})
export class OrderPanelComponent implements OnInit {

  items: Order[] = [];
  dataLoaded = false;
  constructor(private orderService: OrderService,
    private toasterService: ToastrService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe((response) => {
      this.items = response.data
      this.dataLoaded = true
    })
  }
}
