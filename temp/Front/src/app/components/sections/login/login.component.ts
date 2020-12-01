import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpService } from "../../../services/http.service";
import { LoginService } from "../../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = this.loginForm.value;

    this.httpService.authenticateUser(user).subscribe((data: any) => {
      if (data.success) {
        this.loginService.storeUserData(data.token, data.user);
        this.router.navigate(["/"]);
      } else {
        console.log("Error login implementar error por login");
      }
    });
  }

}
