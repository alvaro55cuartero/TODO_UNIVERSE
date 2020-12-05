import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

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
		this.login.login(user, (isLogged) => {
			if(isLogged) {
				this.router.navigate(["/"]);
			}
		})
	}

}
