import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from '../../../../services/http/http.service'

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
	user: any;
	texts: any;
	constructor(
		private router: ActivatedRoute,
		private httpService: HttpService,
	) { }

	ngOnInit(): void {
		this.updateUser();
	}

	trackByList(index: number, text: any): number {
		return text._id;
	}

	updateUser() {
		//this.httpService.getProfile((data: any) => {
		//	this.user = data.user;
		//	this.texts = [...data.user.texts];
		//});
	}
}