import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  signinForm;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ) {

    this.signinForm = this.formBuilder.group({
      username:['', Validators.required],
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.httpService.registerUser(this.signinForm.value).subscribe((data: any) => {
      if (data.success) {
        console.log("registered");
        this.router.navigate(["/"]);
      } else {
        console.log("not registered");
      }
    });
  }

}
