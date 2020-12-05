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
		private http: HttpService,
	) { }

	ngOnInit(): void {
		this.updateUser();
	}

	trackByList(index: number, text: any): number {
		return text._id;
	}

	updateUser() {
		this.http.getProfile((data: any) => {
			console.log(data);
			this.user = data;
			this.texts = [...data.texts];
		});
	}

	onTextDeleteClick(id) {

	}
}