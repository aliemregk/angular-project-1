import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = "https://localhost:44364/api/orders/"

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<ListResponseModel<Order>> {
    return this.httpClient.get<ListResponseModel<Order>>(this.apiUrl + "getall");
  }

  getOrdersByUserId(id: number): Observable<ListResponseModel<Order>> {
    return this.httpClient.get<ListResponseModel<Order>>(this.apiUrl + "getallbyuserid?id=" + id);
  }

  getOrdersByProductId(id: number): Observable<ListResponseModel<Order>> {
    return this.httpClient.get<ListResponseModel<Order>>(this.apiUrl + "getallbyproductid?id=" + id);
  }

  add(order: Order): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", order);
  }

  update(order: Order): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "update", order);
  }

  delete(order: Order): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "delete", order);
  }
}

