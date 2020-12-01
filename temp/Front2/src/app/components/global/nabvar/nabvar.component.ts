import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login/login.service'

@Component({
	selector: 'app-nabvar',
	templateUrl: './nabvar.component.html',
	styleUrls: ['./nabvar.component.sass']
})
export class NabvarComponent implements OnInit {

	routes : any;


	constructor(public loginService: LoginService) { }

	ngOnInit(): void {
		//this.routes = [
		//	{"link":"/",			"name":"Index",			"if":true},
		//	{"link":"admin",		"name":"Admin",			"if":this.loginService.isAdmin()},
		//	{"link":"news",			"name":"News",			"if":true},
		//	{"link":"editor",		"name":"Editor",		"if":this.loginService.isUser()},
		//	{"link":"texts",		"name":"Texts",			"if":true},
		//	{"link":"encyclopedia",	"name":"Encyclopedia",	"if":true},
		//	{"link":"profile",		"name":"Profile",		"if":this.loginService.isUser()},
		//	{"link":"login",		"name":"Login",			"if":this.loginService.isGuest()},
		//	{"link":"signin",		"name":"Signin",		"if":this.loginService.isGuest()}
		//]
	}

	onLogoutClick() {
		this.loginService.logout();
	}
}