import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { HttpService } from "../../../../../services/http/http.service";
import { AlertService } from "../../../../../services/alert/alert.service";

@Component({
	selector: 'app-admin-database-characters',
	templateUrl: './admin-database-characters.component.html',
	styleUrls: ['./admin-database-characters.component.sass']
})
export class AdminDatabaseCharactersComponent implements OnInit {

	characterForm = new FormGroup({
		name: new FormControl(''),
		owner: new FormControl('')
	});
	data: any;


	constructor(
		private http: HttpService
	) { }

	ngOnInit(): void {
		this.updateDatabase();
	}


	onSubmit() {
		this.http.createCharacter(this.characterForm.value, (result) => {this.updateDatabase();});
	}

	updateDatabase() {
		this.http.getCharacters((data) => {this.data = data;});
	}

}
