import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) { }

	get(path, callback) {
		let headers = new HttpHeaders();
		headers.set("Content-Type", "application/json");
		return this.http.get(path, {headers: headers}).subscribe(callback);
	}

	post() {

	}


	textGet(callback) {
		return this.get("http://127.0.0.1:3000/text", callback);
	}




	userPostLogin(user, callback) {
		let headers = new HttpHeaders();
		headers.set("Content-Type", "application/json");
		this.http.post("http://127.0.0.1:3000/user/login", user, {headers: headers}).subscribe(callback);
	}


	userPostProfile(callback) {
		let token = localStorage.getItem("id_token");
		let headers;

		if(token) {
			headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': token });
		} else {
			callback(null);
			return;
		}


		this.http.post("http://127.0.0.1:3000/user/profile", {} ,{headers: headers}).subscribe(callback);
	}
}
