import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) {}


  registerUser(user) {
     let headers = new HttpHeaders();
     headers.set("Content-Type", "application/json");
     return this.http.post("http://127.0.0.1/users/register", user, {headers: headers});
  }

  authenticateUser(user) {
     let headers = new HttpHeaders();
     headers.set("Content-Type", "application/json");
     return this.http.post("http://127.0.0.1/users/authenticate", user, {headers: headers});
  }

  getProfile(callback) {
    let token = localStorage.getItem("id_token");

    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': token
    });

    this.http.get("http://127.0.0.1/users/profile",{headers: headers}).subscribe(callback);
  }
  
  getProfileUser(username) {
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });

    return this.http.get(`http://127.0.0.1/users/profile/${username}`,{headers: headers});
  }

  deleteText(textId) {
    let token = localStorage.getItem("id_token");

    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': token
    });
    return this.http.delete(`http://127.0.0.1/texts/${textId}`, {headers: headers});
  }

  get(path, callback) {
    let headers = new HttpHeaders();
    headers.set("Content-Type", "application/json");
    return this.http.get(path, {headers: headers}).subscribe(callback);
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
}
