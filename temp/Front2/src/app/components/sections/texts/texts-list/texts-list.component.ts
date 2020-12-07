import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpService } from '../../../../services/http/http.service'


@Component({
	selector: 'app-texts-list',
	templateUrl: './texts-list.component.html',
	styleUrls: ['./texts-list.component.sass']
})
export class TextsListComponent implements OnInit {
	
	texts: any;
	
	filterForm = new FormGroup(
		{
			email: new FormControl(),
			password: new FormControl()
		}
	);

	constructor(
		private http: HttpService
	) { }
	
	ngOnInit(): void {
		this.http.textGet((data:any) => {
			this.texts = data;
		});
	}

	onFilterSubmit() {
		
	}
}
