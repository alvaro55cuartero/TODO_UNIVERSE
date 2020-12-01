import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../../../services/login.service";

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

	items = [
		{ name: "Index",        link: "/",            status:0},
		{ name: "Admin",        link: "admin",        status:"admin"},
		{ name: "News",         link: "news",         status:0},
		{ name: "Editor",       link: "editor",       status:"user"},
		{ name: "Texts",        link: "texts",        status:"user"},
		{ name: "Encyclopedia", link: "encyclopedia", status:0},
		{ name: "Profile",      link: "profile",      status:"user"},
		{ name: "Login",        link: "login",        status:0},
		{ name: "Signin",       link: "signin",       status:0}
	]


	constructor(
		private router: Router,
		public loginService: LoginService
	) { }

	ngOnInit(): void {

	}

	onLogoutClick() {
		this.loginService.logout();
	}

}
