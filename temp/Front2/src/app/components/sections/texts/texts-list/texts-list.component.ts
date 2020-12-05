import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http/http.service'


@Component({
	selector: 'app-texts-list',
	templateUrl: './texts-list.component.html',
	styleUrls: ['./texts-list.component.sass']
})
export class TextsListComponent implements OnInit {
	
	texts: any;

	constructor(
		private http: HttpService
	) { }
	
	ngOnInit(): void {
		this.http.textGet((data:any) => {
			this.texts = data;
		});
	}

}
