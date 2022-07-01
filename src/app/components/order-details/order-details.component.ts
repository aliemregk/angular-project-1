import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {


  items: Order[] = [];
  dataLoaded = false;
  constructor(private orderService: OrderService,
    private toasterService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {

      this.getOrderDetails(params["id"]);

    })
  }

  getOrderDetails(id:number) {
    // this.orderService.get .subscribe((response) => {
    //   this.items = response.data
    //   this.dataLoaded = true
    // })
  }

  deleteOrder(order: Order) {
    this.orderService.delete(order).subscribe((response) => {
      this.toasterService.error(response.message, "Order deleted.");
    })
  }

  updateOrder(order: Order) {
    this.orderService.update(order).subscribe((response) => {
      this.toasterService.error(response.message, "Order deleted.");
    })
  }
}
