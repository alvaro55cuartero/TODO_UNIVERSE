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

	put(path, data, callback) {
		let token = localStorage.getItem("id_token");
		let headers = new HttpHeaders();

		headers = headers.append('Content-Type', 'application/json');
		
		if (token) {
			headers = headers.append('Authorization', token);
		}

		this.http.put(path, data, {headers: headers}).subscribe(callback);
	}


	delete(path, callback) {
		let token = localStorage.getItem("id_token");
		let headers = new HttpHeaders();

		headers = headers.append('Content-Type', 'application/json');
		
		if (token) {
			headers = headers.append('Authorization', token);
		}

		this.http.delete(path, {headers: headers}).subscribe(callback);
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
		this.get(`http://127.0.0.1:3000/user/profile/${username}`, callback);
	}

	deleteText(textId, callback) {
		this.delete(`http://127.0.0.1:3000/text/${textId}`, callback);
	}

	getTexts(callback) {
		this.get(`http://127.0.0.1:3000/text`, callback);
	}

	uploadText(text, callback) {
		this.post("http://127.0.0.1:3000/text", text, callback);
	}

	updateText(text, callback) {
		this.put("http://127.0.0.1:3000/text", text, callback);
	}

	search(search) {
		let headers = new HttpHeaders();
		headers.set("Content-Type", "application/json");
		let a = this.http.get("http://127.0.0.1:3000/search/" + search, {headers: headers});
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
		this.post("http://127.0.0.1:3000/character", character, callback);
	}

	getCharacters(callback) {
		this.get("http://127.0.0.1:3000/character", callback);
	}
}
