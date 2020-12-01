import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  status = "guest";

  constructor(
    private httpService: HttpService
  ) {
    this.updateStatus();
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.status = user.status;
  }
  
  logout() {
    localStorage.clear();
    this.status = "guest";
  }
  user() {
    return JSON.parse(localStorage.getItem("user"));
  }

  isAdmin() {
    return this.status == "admin";
  }

  isUser() {
    return this.status == "user" || this.status == "admin";
  }
  
  isGuest() {
    return this.status == "guest";
  }

  token() {
    return localStorage.getItem("id_token");
  }
  
  isLogin() {
    return localStorage.getItem("id_token") != null;
  }


  updateStatus() {
    this.httpService.getProfile((data: any) => {
      console.log(data);

      if (data) {
        this.status = data.user.status;
      }
    });
  }
}
