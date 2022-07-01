import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44364/api/auth/";
  admin = false;

  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel) {
    this.isAdmin(loginModel);
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel);
  }

  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin(loginModel: LoginModel) {
    if (loginModel.email == "admin@admin.com") {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

}
