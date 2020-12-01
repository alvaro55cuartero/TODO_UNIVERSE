import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { LoginService } from 'src/app/services/login/login.service';

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
		private http: HttpService,
		private login: LoginService,
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
