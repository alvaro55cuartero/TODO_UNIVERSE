import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { UserType } from '../../components/types/types.model'

@Injectable({
	providedIn: 'root'
})
export class LoginService {


	status = UserType.guest;

	constructor(
		private http: HttpService
	) {
		this.updateStatus();
	}

	storeUserData(token, user) {
		localStorage.setItem('id_token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.status = user.status;
	}

	login(user, callback){
		this.http.userPostLogin(user, (data: any) => {
			this.storeUserData(data.token, data.user);
			callback(true);
		});
	}
	
	logout() {
		localStorage.clear();
		this.status = UserType.guest;
	}

	user() {
		return JSON.parse(localStorage.getItem("user"));
	}

	token() {
		return localStorage.getItem("id_token");
	}

	updateStatus() {
		this.http.userGetProfile((data: any) => {
			if (data) {
				this.status = data.status;
			} else {
				this.status = UserType.guest;
			}
		});
	}

	isGuest() {
		return this.status == UserType.guest;
	}

	isUser() {
		return this.status == UserType.user;
	}

	isAdmin() {
		return this.status == UserType.admin;
	}

	isLogged() {
		return this.status != UserType.guest;
	}

	getStatus() {
		return this.status;
	}

}
