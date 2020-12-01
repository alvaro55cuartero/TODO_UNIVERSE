import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from "../../../../../services/http/http.service";
import { AlertService } from "../../../../../services/alert/alert.service";

@Component({
	selector: 'app-admin-database-texts',
	templateUrl: './admin-database-texts.component.html',
	styleUrls: ['./admin-database-texts.component.sass']
})
export class AdminDatabaseTextsComponent implements OnInit {
	textForm = new FormControl('');
	data: any;

	options = {
        autoClose: false,
        keepAfterRouteChange: false
    };

	constructor(
		private http: HttpService,
		public alertService: AlertService
	) { }
	
	ngOnInit(): void {
		this.http.get("http://127.0.0.1:3000/text", (data:any) => {this.data = data; console.log(data);});
	}

	onSubmit() {
		//this.http.post("http://127.0.0.1:3000/text");
		this.textForm.value
	}
}
