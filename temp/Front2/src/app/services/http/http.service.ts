import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) { }

	get(path, callback) {
		let token = localStorage.getItem("id_token");
		let headers = new HttpHeaders();

		headers = headers.append('Content-Type', 'application/json');
		
		if (token) {
			headers = headers.append('Authorization', token);
		}
		
		return this.http.get(path, {headers: headers}).subscribe(callback);
	}

	post(path, data, callback) {
		let token = localStorage.getItem("id_token");
		let headers = new HttpHeaders();

		headers = headers.append('Content-Type', 'application/json');
		
		if (token) {
			headers = headers.append('Authorization', token);
		}

		this.http.post(path, data, {headers: headers}).subscribe(callback);
	}


	//Text

	textGet(callback) {
		this.get("http://127.0.0.1:3000/text", callback);
	}

	//User

	userPostLogin(user, callback) {
		this.post("http://127.0.0.1:3000/user/login", user, callback);
	}


	userGetProfile(callback) {
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


		this.http.get("http://127.0.0.1:3000/user/profile", {headers: headers}).subscribe(callback);
	}


	user(user, callback) {
		this.post("http://127.0.0.1:3000/user/register", user, callback);
	}

	getProfile(callback) {
		this.get("http://127.0.0.1:3000/user/profile", callback);
	}

	getProfileUser(username, callback) {
		this.get(`http://127.0.0.1/users/profile/${username}`, callback);
	}

	deleteText(textId) {
		let token = localStorage.getItem("id_token");

		let headers = new HttpHeaders({
		'Content-Type':  'application/json',
		'Authorization': token
		});
		return this.http.delete(`http://127.0.0.1/texts/${textId}`, {headers: headers});
	}

	getTexts(callback) {
		let token = localStorage.getItem("id_token");

		let headers = new HttpHeaders({
		'Content-Type':  'application/json',
		'Authorization': token
		});
		return this.http.get(`http://127.0.0.1/texts`, {headers: headers}).subscribe(callback);
	}

	uploadText(text, callback) {
		let token = localStorage.getItem("id_token");

		let headers = new HttpHeaders({
		'Content-Type':  'application/json',
		'Authorization': token
		});
		return this.http.post("http://127.0.0.1/texts/", text, {headers: headers}).subscribe(callback);
	}

	updateText(text, callback) {
		let token = localStorage.getItem("id_token");

		let headers = new HttpHeaders({
		'Content-Type':  'application/json',
		'Authorization': token
		});
		return this.http.put("http://127.0.0.1/texts/", text,  {headers: headers}).subscribe(callback);
	}

	search(search) {
		let headers = new HttpHeaders();
		headers.set("Content-Type", "application/json");
		let a = this.http.get("http://127.0.0.1/search/" + search, {headers: headers});
		return a;
	}
	 /*
	 vote(vote, textId, callback) {
	   let token = localStorage.getItem("id_token");

	   let headers = new HttpHeaders({
		 'Content-Type': 'application/json',
		 'Authorization': token
	   });

	   this.http.put("http://127.0.0.1/texts/vote/" + textId, vote, {headers: headers}).subscribe(callback);
	 }*/



	// characters


	createCharacter(character, callback) {
		let token = localStorage.getItem("id_token");

		let headers = new HttpHeaders({
		'Content-Type':  'application/json',
		'Authorization': token
		});

		this.http.post("http://127.0.0.1:3000/character", character, {headers: headers}).subscribe(callback);
	}

	getCharacters(callback) {
		let token = localStorage.getItem("id_token");

		let headers = new HttpHeaders({
		'Content-Type':  'application/json',
		'Authorization': token
		});

		this.http.get("http://127.0.0.1:3000/character", {headers: headers}).subscribe(callback);
	}
}
