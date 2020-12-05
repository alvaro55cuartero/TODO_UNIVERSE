import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

	loginForm = new FormGroup(
		{
			email: new FormControl(),
			password: new FormControl()
		}
	);

	constructor(
		private router: Router,
		private login: LoginService,
		private http: HttpClient
	) { }

	ngOnInit(): void {
	}

	onSubmit() {
		const user = this.loginForm.value;


		let token = localStorage.getItem("id_token");

		let headers = new HttpHeaders({
		'Content-Type':  'application/json',
		'Authorization': token
		});

		this.http.post("http://127.0.0.1:3000/user/login", {"email":"alvaro@gmail.com", "password":"Op102no1"}, {headers: headers}).subscribe();		
		this.login.login(user, (isLogged) => {
			if(isLogged) {
				this.router.navigate(["/"]);
			}
		})
	}

}
